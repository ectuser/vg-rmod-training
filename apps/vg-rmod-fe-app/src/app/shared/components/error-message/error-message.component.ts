import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'vg-rmod-training-error-message',
  template: `
    <small class="text-danger" *ngIf="control?.invalid && (control?.touched || control?.dirty) && (!error || control?.hasError(error))">
      {{text}}
    </small>
  `
})
export class ErrorMessageComponent {
  @Input() text = '';
  @Input() control?: AbstractControl;
  @Input() error?: string;
}
