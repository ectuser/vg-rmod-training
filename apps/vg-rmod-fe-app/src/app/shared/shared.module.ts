import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ErrorMessageComponent } from './components/error-message/error-message.component';
import { NgxMaskModule } from 'ngx-mask';

const modules = [ReactiveFormsModule];
const components = [ErrorMessageComponent];

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    CommonModule,
    NgxMaskModule.forRoot(),
    ...modules
  ],
  exports: [...modules, NgxMaskModule, ...components]
})
export class SharedModule { }
