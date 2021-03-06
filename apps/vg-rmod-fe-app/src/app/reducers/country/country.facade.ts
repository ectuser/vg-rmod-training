import { Injectable } from '@angular/core';
import { Store} from '@ngrx/store';

import * as CountryActions from './country.actions';
import * as CountrySelectors from './country.selectors';

@Injectable({
  providedIn: 'root'
})
export class CountryFacade {

  readonly loaded$ = this.store.select(CountrySelectors.selectCountryLoaded);
  readonly allCountries$ = this.store.select(CountrySelectors.selectAllCountries);
  readonly selectedCountry$ = this.store.select(CountrySelectors.selectSelectedName);

  constructor(private readonly store: Store) {}

  init() {
    this.store.dispatch(CountryActions.init());
  }
}
