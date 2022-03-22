import { createFeatureSelector, createSelector } from '@ngrx/store';
import { INFO_FEATURE_KEY, State } from './info.reducer';
import * as CountrySelectors from '../country/country.selectors';

export const selectInfoState = createFeatureSelector<State>(INFO_FEATURE_KEY);

export const selectFirstName = createSelector(selectInfoState, (state) => state.firstName);
export const selectLastName = createSelector(selectInfoState, (state) => state.lastName);
export const selectPhone = createSelector(selectInfoState, (state) => state.phone);
export const selectFullPhone = createSelector(selectPhone, CountrySelectors.selectSelectedId, CountrySelectors.selectAllCountries, (phone, country, countries) => {
  const code = countries.find((el) => el.code === country)?.code || '';
  return '+' + code + phone;
});
export const selectFirstStepPassed = createSelector(selectInfoState, (state) => state.firstStepPassed);
