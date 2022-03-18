import { Component, ChangeDetectionStrategy } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'vg-rmod-training-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PersonalInformationComponent {
  readonly form = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required)
  }, {validators: this.validateName()});

  constructor(private router: Router) {}

  submit() {
    this.router.navigate(['/registration/contact-page']);
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
