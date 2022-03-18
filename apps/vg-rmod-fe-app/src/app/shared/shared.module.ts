import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ErrorMessageComponent } from './components/error-message/error-message.component';

const modules = [ReactiveFormsModule];
const components = [ErrorMessageComponent];

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    CommonModule,
    ...modules
  ],
  exports: [...modules, ...components]
})
export class SharedModule { }
