import { createReducer, on, Action } from '@ngrx/store';

import * as InfoActions from './info.actions';

export const INFO_FEATURE_KEY = 'info';

export interface State {
  firstName?: string;
  lastName?: string;
  phone?: string;
}

export interface InfoPartialState {
  readonly [INFO_FEATURE_KEY]: State;
}

export const initialState: State = {};

const infoReducer = createReducer(
  initialState,
  on(InfoActions.addPersonalInformation, (state, {firstName, lastName}) => ({
    ...state, 
    firstName,
    lastName
  })),
  on(InfoActions.addContactInformation, (state, {phone}) => ({
    ...state,
    phone
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return infoReducer(state, action);
}
