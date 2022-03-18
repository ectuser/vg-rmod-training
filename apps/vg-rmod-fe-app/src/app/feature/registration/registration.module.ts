import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalInformationComponent } from './pages/personal-information/personal-information.component';
import { RouterModule } from '@angular/router';
import { RegistrationRoutingModule } from './registration-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { ContactInformationComponent } from './pages/contact-information/contact-information.component';



@NgModule({
  declarations: [
    PersonalInformationComponent,
    ContactInformationComponent
  ],
  imports: [
    CommonModule, RouterModule, RegistrationRoutingModule, SharedModule
  ]
})
export class RegistrationModule { }
