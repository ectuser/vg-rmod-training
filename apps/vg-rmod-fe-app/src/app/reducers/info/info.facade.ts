import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import * as InfoActions from './info.actions';
import * as InfoSelectors from './info.selectors';
import { ContactInformation, PersonalInformation } from "./info.models";

@Injectable({
    providedIn: 'root'
})
export class InfoFacade {
    readonly firstName$ = this.store.select(InfoSelectors.getFirstName);
    readonly lastName$ = this.store.select(InfoSelectors.getLastName);
    readonly phone$ = this.store.select(InfoSelectors.getFullPhone);

    constructor(private readonly store: Store) {}

    addPersonalInformation(info: PersonalInformation) {
        this.store.dispatch(InfoActions.addPersonalInformation(info));
    }

    addContactInformation(info: ContactInformation) {
        this.store.dispatch(InfoActions.addContactInformation(info));
    }
}