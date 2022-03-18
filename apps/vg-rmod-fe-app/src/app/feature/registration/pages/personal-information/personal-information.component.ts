import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'vg-rmod-training-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PersonalInformationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
