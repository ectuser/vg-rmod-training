import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalInformationComponent } from './pages/personal-information/personal-information.component';
import { RouterModule } from '@angular/router';
import { RegistrationRoutingModule } from './registration-routing.module';



@NgModule({
  declarations: [
    PersonalInformationComponent
  ],
  imports: [
    CommonModule, RouterModule, RegistrationRoutingModule
  ]
})
export class RegistrationModule { }
