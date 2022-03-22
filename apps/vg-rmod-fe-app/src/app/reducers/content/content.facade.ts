import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import * as ContentAction from './content.actions';

@Injectable({ providedIn: 'root' })
export class ContentFacade {
    
    constructor(private store: Store) {}
    
    init(): void {
        this.store.dispatch(ContentAction.init());
    }
}