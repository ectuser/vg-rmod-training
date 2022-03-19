import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CountryFacade } from '../../../../reducers/country/country.facade';

@Component({
  selector: 'vg-rmod-training-contact-information',
  templateUrl: './contact-information.component.html',
  styleUrls: ['./contact-information.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactInformationComponent implements OnInit {
  readonly countryCodes$ = this.countryFacade.allCountries$;

  readonly form = new FormGroup({
    country: new FormControl(),
    phoneNumber: new FormControl()
  });

  constructor(private modalService: NgbModal, private countryFacade: CountryFacade) {}

  ngOnInit(): void {
      this.countryFacade.init();
  }

  open(content: any) {
    this.modalService.open(content, {
      ariaLabelledBy: 'modal-basic-title', 
      size: 'xl', 
      centered: true, 
      backdrop: 'static',
      modalDialogClass: 'contact-information'
    });
  }
}
