import { Action } from '@ngrx/store';

import * as InfoActions from './info.actions';
import { InfoEntity } from './info.models';
import { State, initialState, reducer } from './info.reducer';

describe('Info Reducer', () => {
  const createInfoEntity = (id: string, name = ''): InfoEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Info actions', () => {
    it('loadInfoSuccess should return the list of known Info', () => {
      const info = [
        createInfoEntity('PRODUCT-AAA'),
        createInfoEntity('PRODUCT-zzz'),
      ];
      const action = InfoActions.loadInfoSuccess({ info });

      const result: State = reducer(initialState, action);

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as Action;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
