import * as fromContent from '../content.actions';

describe('loadContents', () => {
  it('should return an action', () => {
    expect(fromContent.loadContent().type).toBe('[Content] Load Contents');
  });
});
