import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as CountryActions from './country.actions';
import { CountryEntity } from './country.models';

export const COUNTRY_FEATURE_KEY = 'country';

export interface State extends EntityState<CountryEntity> {
  selectedId?: string | number;
  loaded: boolean;
  error?: string | null;
}

export interface CountryPartialState {
  readonly [COUNTRY_FEATURE_KEY]: State;
}

export const countryAdapter: EntityAdapter<CountryEntity> =
  createEntityAdapter<CountryEntity>({
    selectId: (model: CountryEntity) => model.code
  });

export const initialState: State = countryAdapter.getInitialState({
  loaded: false,
});

const countryReducer = createReducer(
  initialState,
  on(CountryActions.init, (state): State => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(CountryActions.loadCountrySuccess, (state, { countries: country }) =>
    countryAdapter.setAll(country, { ...state, loaded: true })
  ),
  on(CountryActions.loadCountryFailure, (state, { error }): State => ({
    ...state,
    error,
  })),
  on(CountryActions.setSelectedCountry, (state, {country}): State => ({
    ...state,
    selectedId: country
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return countryReducer(state, action);
}
