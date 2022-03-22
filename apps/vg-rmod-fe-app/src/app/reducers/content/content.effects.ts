import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { map, withLatestFrom } from 'rxjs/operators';

import * as ContentActions from './content.actions';
import { Store } from '@ngrx/store';
import { selectPageId } from './content.selectors';
import { fetch } from '@nrwl/angular';
import { ContentService } from './content.service';


@Injectable()
export class ContentEffects {
  init$ = createEffect(() => 
    this.actions$.pipe(
      ofType(ContentActions.init),
      withLatestFrom(this.store.select(selectPageId)),
      map(([action, pageId]) => {
        if (pageId) {
          return ContentActions.loadContent({pageId});
        } else {
          return ContentActions.loadContentFailure({error: 'Could not load the page content'});
        }
      })
    )
  )

  loadContent$ = createEffect(() => {
    return this.actions$.pipe( 
      ofType(ContentActions.loadContent),
      fetch({
        run: (action) => {
          debugger
          return this.contentService.loadContentByPageId(action.pageId).pipe(map((content) => {
            return ContentActions.loadContentSuccess({content});
          }))
        },
        onError: (_, error) => {
          return ContentActions.loadContentFailure({error});
        }
      })
    );
  });


  constructor(private actions$: Actions, private store: Store, private contentService: ContentService) {}

}
