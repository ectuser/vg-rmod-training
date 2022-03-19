import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromInfo from './info/info.reducer';


export interface State {
  [fromInfo.INFO_FEATURE_KEY]: fromInfo.State
}

export const reducers: ActionReducerMap<State> = {
  [fromInfo.INFO_FEATURE_KEY]: fromInfo.reducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
