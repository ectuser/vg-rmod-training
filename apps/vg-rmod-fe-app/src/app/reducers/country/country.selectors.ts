import { createFeatureSelector, createSelector } from '@ngrx/store';
import { COUNTRY_FEATURE_KEY, State, countryAdapter } from './country.reducer';

// Lookup the 'Country' feature state managed by NgRx
export const selectCountryState =
  createFeatureSelector<State>(COUNTRY_FEATURE_KEY);

const { selectAll, selectEntities } = countryAdapter.getSelectors();

export const selectCountryLoaded = createSelector(
  selectCountryState,
  (state: State) => state.loaded
);

export const selectCountryError = createSelector(
  selectCountryState,
  (state: State) => state.error
);

export const selectAllCountries = createSelector(selectCountryState, (state: State) =>
  selectAll(state)
);

export const selectCountryEntities = createSelector(
  selectCountryState,
  (state: State) => selectEntities(state)
);

export const selectSelectedId = createSelector(
  selectCountryState,
  (state: State) => state.selectedId
);

export const selectSelectedEntity = createSelector(
  selectCountryEntities,
  selectSelectedId,
  (entities, selectedId) => (selectedId ? entities[selectedId] : undefined)
);

export const selectSelectedName = createSelector(selectSelectedEntity, (country) => country?.country);
