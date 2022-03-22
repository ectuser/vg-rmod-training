import { createAction, props } from '@ngrx/store';
import { CountryEntity } from "@vg-rmod-training/shared-models";

export const init = createAction('[Country Page] Init');

export const loadCountrySuccess = createAction(
  '[Country/API] Load Country Success',
  props<{ countries: CountryEntity[] }>()
);

export const loadCountryFailure = createAction(
  '[Country/API] Load Country Failure',
  props<{ error: any }>()
);

export const setSelectedCountry = createAction('[Country] Set selected country', props<{country: string}>());
