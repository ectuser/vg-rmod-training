import { createAction, props } from '@ngrx/store';
import { ContactInformation, PersonalInformation } from './info.models';

export const addPersonalInformation = createAction('[Info] Add personal information', props<{info: PersonalInformation}>());
export const addContactInformation = createAction('[Info] Add contact information', props<{info: ContactInformation}>());
