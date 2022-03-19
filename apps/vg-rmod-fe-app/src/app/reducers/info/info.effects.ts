import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';

import * as InfoActions from './info.actions';
import * as InfoFeature from './info.reducer';

@Injectable()
export class InfoEffects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(InfoActions.init),
      fetch({
        run: (action) => {
          // Your custom service 'load' logic goes here. For now just return a success action...
          return InfoActions.loadInfoSuccess({ info: [] });
        },
        onError: (action, error) => {
          console.error('Error', error);
          return InfoActions.loadInfoFailure({ error });
        },
      })
    )
  );

  constructor(private readonly actions$: Actions) {}
}
