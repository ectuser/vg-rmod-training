import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as InfoFeature from './info/info.reducer';
import * as CountryFeature from './country/country.reducer';


export interface State {
  [InfoFeature.INFO_FEATURE_KEY]: InfoFeature.State;
  [CountryFeature.COUNTRY_FEATURE_KEY]: CountryFeature.State;
}

export const reducers: ActionReducerMap<State> = {
  [InfoFeature.INFO_FEATURE_KEY]: InfoFeature.reducer,
  [CountryFeature.COUNTRY_FEATURE_KEY]: CountryFeature.reducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
