import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { tap } from 'rxjs';

import * as InfoActions from './info.actions';

@Injectable()
export class InfoEffects {
  navigateToContactPage$ = createEffect(() => this.actions$.pipe(
    ofType(InfoActions.addPersonalInformation),
    tap(() => {      
      this.router.navigate(['/registration/contact-page']);
    })
  ), {dispatch: false});

  constructor(private readonly actions$: Actions, private readonly router: Router) {}
}
