import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import * as InfoActions from './info.actions';
import * as InfoSelectors from './info.selectors';
import { ContactInformation, PersonalInformation } from "./info.models";

@Injectable({
    providedIn: 'root'
})
export class InfoFacade {
    readonly firstName$ = this.store.select(InfoSelectors.selectFirstName);
    readonly lastName$ = this.store.select(InfoSelectors.selectLastName);
    readonly fullPhone$ = this.store.select(InfoSelectors.selectFullPhone);
    readonly firstStepPassed$ = this.store.select(InfoSelectors.selectFirstStepPassed);

    constructor(private readonly store: Store) {}

    addPersonalInformation(info: PersonalInformation) {
        this.store.dispatch(InfoActions.addPersonalInformation(info));
    }

    addContactInformation(info: ContactInformation) {
        this.store.dispatch(InfoActions.addContactInformation(info));
    }
}