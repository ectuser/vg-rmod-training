import { InfoEntity } from './info.models';
import { infoAdapter, InfoPartialState, initialState } from './info.reducer';
import * as InfoSelectors from './info.selectors';

describe('Info Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getInfoId = (it: InfoEntity) => it.id;
  const createInfoEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as InfoEntity);

  let state: InfoPartialState;

  beforeEach(() => {
    state = {
      info: infoAdapter.setAll(
        [
          createInfoEntity('PRODUCT-AAA'),
          createInfoEntity('PRODUCT-BBB'),
          createInfoEntity('PRODUCT-CCC'),
        ],
        {
          ...initialState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Info Selectors', () => {
    it('getAllInfo() should return the list of Info', () => {
      const results = InfoSelectors.getAllInfo(state);
      const selId = getInfoId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = InfoSelectors.getSelected(state) as InfoEntity;
      const selId = getInfoId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getInfoLoaded() should return the current "loaded" status', () => {
      const result = InfoSelectors.getInfoLoaded(state);

      expect(result).toBe(true);
    });

    it('getInfoError() should return the current "error" state', () => {
      const result = InfoSelectors.getInfoError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
