import { createAction, props } from '@ngrx/store';
import {ContentText} from '@vg-rmod-training/shared-models'

export const init = createAction('[Content] Init');
export const loadContent = createAction('[Content] Load Contents', props<{pageId: string}>());

export const loadContentSuccess = createAction('[Content] Load content success', props<{content: ContentText}>());
export const loadContentFailure = createAction('[Content] Load content failure', props<{error: unknown}>());
