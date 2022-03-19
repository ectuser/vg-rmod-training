import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as InfoActions from './info.actions';
import { Country } from './info.models';

export const INFO_FEATURE_KEY = 'info';

export interface State {
  firstName?: string;
  lastName?: string;
  country?: string;
  phone?: string;
  countries: Country[];
}

export interface InfoPartialState {
  readonly [INFO_FEATURE_KEY]: State;
}

export const initialState: State = {
  countries: [
    { country: 'US', code: '1' },
    { country: 'PL', code: '48' },
    { country: 'HU', code: '36' },
  ]
};

const infoReducer = createReducer(
  initialState,
  on(InfoActions.addPersonalInformation, (state, {info}) => ({
    ...state, 
    firstName: info.firstName,
    lastName: info.lastName
  })),
  on(InfoActions.addContactInformation, (state, {info}) => ({
    ...state, 
    country: info.country,
    phone: info.phone
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return infoReducer(state, action);
}
