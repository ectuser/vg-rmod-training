import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'vg-rmod-training-contact-information',
  templateUrl: './contact-information.component.html',
  styleUrls: ['./contact-information.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactInformationComponent {
  readonly countryCodes = [
    { country: 'US', code: '1' },
    { country: 'PL', code: '48' },
    { country: 'HU', code: '36' },
  ];

  readonly form = new FormGroup({
    country: new FormControl(this.countryCodes[0].code),
    phoneNumber: new FormControl()
  });
}
