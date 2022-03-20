import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';
import { map } from 'rxjs';

import * as CountryActions from './country.actions';
import * as CountryFeature from './country.reducer';
import * as InfoActions from '../info/info.actions';
import { CountryService } from './country.service';

@Injectable()
export class CountryEffects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CountryActions.init),
      fetch({
        run: (action) => {
          // Your custom service 'load' logic goes here. For now just return a success action...
          return this.countryService.getCountries().pipe(map((countries) => {
            return CountryActions.loadCountrySuccess({ countries: countries });
          }))
        },
        onError: (action, error) => {
          console.error('Error', error);
          return CountryActions.loadCountryFailure({ error });
        },
      })
    )
  );

  setSelectedCountry$ = createEffect(() => 
      this.actions$.pipe(
        ofType(InfoActions.addContactInformation),
        map((action) => {
          return CountryActions.setSelectedCountry({country: action.country})
        })
      )
  );

  constructor(private readonly actions$: Actions, private readonly countryService: CountryService) {}
}
