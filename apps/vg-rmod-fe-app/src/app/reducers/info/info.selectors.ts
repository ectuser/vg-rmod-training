import { createFeatureSelector, createSelector } from '@ngrx/store';
import { INFO_FEATURE_KEY, State } from './info.reducer';

// Lookup the 'Info' feature state managed by NgRx
export const getInfoState = createFeatureSelector<State>(INFO_FEATURE_KEY);

export const getFirstName = createSelector(getInfoState, (state) => state.firstName);
export const getLastName = createSelector(getInfoState, (state) => state.lastName);
export const getCountry = createSelector(getInfoState, (state) => state.country);
export const getPhone = createSelector(getInfoState, (state) => state.phone);
export const getCountries = createSelector(getInfoState, (state) => state.countries);
export const getFullPhone = createSelector(getPhone, getCountry, getCountries, (phone, country, countries) => {
  const code = countries.find((el) => el.country === country)?.code || '';
  return code + phone;
});
