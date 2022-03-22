import { Action, createReducer, on } from '@ngrx/store';
import { ContentText } from '@vg-rmod-training/shared-models';
import * as ContentActions from './content.actions';

export const CONTENT_FEATURE_KEY = 'content';

export interface State {
  [pageId: string]: {
    loaded: boolean,
    content?: ContentText
  }
}

export const initialState: State = {
};

export const reducer = createReducer(
  initialState,

  on(ContentActions.loadContent, (state, action): State => ({
    ...state,
    [action.pageId]: {
      loaded: false,
    } 
  })),

);
