import { createFeatureSelector, createSelector } from '@ngrx/store';
import { selectRouteData } from '../router/router.selectors';
import * as fromContent from './content.reducer';

export const selectContentState = createFeatureSelector<fromContent.State>(
  fromContent.CONTENT_FEATURE_KEY
);

export const selectPageId = createSelector(selectRouteData, (data) => {
  return data && data['pageId']
});
export const selectPageContent = createSelector(selectContentState, selectPageId, (state, pageId) => state && state[pageId]?.content);
export const selectPageContentLoaded = createSelector(selectContentState, selectPageId, (state, pageId) => state[pageId]?.loaded);
