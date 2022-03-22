import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { ContentFacade } from '@vg-rmod-training/vg-rmod-fe-app/app/reducers/content/content.facade';
import { InfoFacade } from '@vg-rmod-training/vg-rmod-fe-app/app/reducers/info/info.facade';

@Component({
  selector: 'vg-rmod-training-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PersonalInformationComponent implements OnInit {
  readonly form = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required)
  }, {validators: this.validateName()});

  constructor(private readonly infoFacade: InfoFacade, private readonly contentFacade: ContentFacade) {}

  ngOnInit(): void {
      this.contentFacade.init();
  }

  submit() {
    this.infoFacade.addPersonalInformation(this.form.value);
  }

  validateName(): ValidatorFn {
    return (form: AbstractControl): ValidationErrors | null => {
      const firstName: string = form.get('firstName')?.value;
      const lastName: string = form.get('lastName')?.value;

      const isValid = !firstName.length || firstName.length > 1 || !lastName.length || lastName.length > 1;

      return isValid ? null : {incorrectName: true};
    }
  }
}
