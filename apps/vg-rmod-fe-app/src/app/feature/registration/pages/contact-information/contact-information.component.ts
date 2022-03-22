import { Component, ChangeDetectionStrategy, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DestroyService } from '@vg-rmod-training/vg-rmod-fe-app/app/core/services/destroy.service';
import { CountryFacade } from '@vg-rmod-training/vg-rmod-fe-app/app/reducers/country/country.facade';
import { InfoFacade } from '@vg-rmod-training/vg-rmod-fe-app/app/reducers/info/info.facade';
import { takeUntil } from 'rxjs';

@Component({
  selector: 'vg-rmod-training-contact-information',
  templateUrl: './contact-information.component.html',
  styleUrls: ['./contact-information.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [DestroyService]
})
export class ContactInformationComponent implements OnInit {
  @ViewChild('modal') modal?: TemplateRef<unknown>;

  readonly countryCodes$ = this.countryFacade.allCountries$;
  readonly firstName$ = this.infoFacade.firstName$;
  readonly lastName$ = this.infoFacade.lastName$;
  readonly country$ = this.countryFacade.selectedCountry$;
  readonly phone$ = this.infoFacade.fullPhone$;
  readonly countriesLoaded$ = this.countryFacade.loaded$;

  readonly form = new FormGroup({
    country: new FormControl({value: '', disabled: true}, Validators.required),
    phone: new FormControl('', Validators.required)
  });

  constructor(
    private readonly modalService: NgbModal, 
    private readonly countryFacade: CountryFacade, 
    private readonly infoFacade: InfoFacade,
    private readonly destroy$: DestroyService
  ) {}

  ngOnInit(): void {
      this.countryFacade.init();

      this.enableControl();
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

  private enableControl() {
    this.countriesLoaded$.pipe(takeUntil(this.destroy$)).subscribe((loaded) => {
      if (loaded) {
        this.form.get('country')?.enable();
      }
    });
  }
}
