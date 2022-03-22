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
import * as ContentFeature from './content/content.reducer';


export interface State {
  [InfoFeature.INFO_FEATURE_KEY]: InfoFeature.State;
  [CountryFeature.COUNTRY_FEATURE_KEY]: CountryFeature.State;
  [ContentFeature.CONTENT_FEATURE_KEY]: ContentFeature.State;
}

export const reducers: ActionReducerMap<State> = {
  [InfoFeature.INFO_FEATURE_KEY]: InfoFeature.reducer,
  [CountryFeature.COUNTRY_FEATURE_KEY]: CountryFeature.reducer,
  [ContentFeature.CONTENT_FEATURE_KEY]: ContentFeature.reducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
