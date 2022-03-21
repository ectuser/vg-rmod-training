import { Component, ChangeDetectionStrategy, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CountryFacade } from '../../../../reducers/country/country.facade';
import { InfoFacade } from '../../../../reducers/info/info.facade';

@Component({
  selector: 'vg-rmod-training-contact-information',
  templateUrl: './contact-information.component.html',
  styleUrls: ['./contact-information.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactInformationComponent implements OnInit {
  @ViewChild('modal') modal?: TemplateRef<any>;

  readonly countryCodes$ = this.countryFacade.allCountries$;
  readonly firstName$ = this.infoFacade.firstName$;
  readonly lastName$ = this.infoFacade.lastName$;
  readonly country$ = this.countryFacade.selectedCountry$;
  readonly phone$ = this.infoFacade.fullPhone$;

  readonly form = new FormGroup({
    country: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required)
  });

  constructor(
    private readonly modalService: NgbModal, 
    private readonly countryFacade: CountryFacade, 
    private readonly infoFacade: InfoFacade
  ) {}

  ngOnInit(): void {
      this.countryFacade.init();
  }

  open() {
    this.infoFacade.addContactInformation(this.form.value);
    if (this.modal) {
      this.modalService.open(this.modal, {
        ariaLabelledBy: 'modal-basic-title', 
        size: 'xl', 
        centered: true, 
        backdrop: 'static',
        modalDialogClass: 'contact-information'
      });
    }
  }
}
