import { createReducer, on, Action } from '@ngrx/store';

import * as InfoActions from './info.actions';

export const INFO_FEATURE_KEY = 'info';

export interface State {
  firstName?: string;
  lastName?: string;
  phone?: string;
  firstStepPassed: boolean;
}

export interface InfoPartialState {
  readonly [INFO_FEATURE_KEY]: State;
}

export const initialState: State = {
  firstStepPassed: false,
};

const infoReducer = createReducer(
  initialState,
  on(InfoActions.addPersonalInformation, (state, {firstName, lastName}): State => ({
    ...state, 
    firstName,
    lastName,
    firstStepPassed: true
  })),
  on(InfoActions.addContactInformation, (state, {phone}): State => ({
    ...state,
    phone
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return infoReducer(state, action);
}
