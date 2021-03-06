import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from 'jasmine-marbles';
import { Observable } from 'rxjs';

import * as InfoActions from '../info.actions';
import { InfoEffects } from '../info.effects';

describe('InfoEffects', () => {
  let actions: Observable<Action>;
  let effects: InfoEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        InfoEffects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(InfoEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: InfoActions.init() });

      const expected = hot('-a-|', {
        a: InfoActions.loadInfoSuccess({ info: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
