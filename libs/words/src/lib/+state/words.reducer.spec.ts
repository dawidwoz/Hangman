import { Action } from '@ngrx/store';

import * as WordsActions from './words.actions';
import { Words } from '@hangman-application/interfaces';
import { State, initialState, reducer } from './words.reducer';

describe('Words Reducer', () => {
  const createWords = (id: string): Words => [id];

  describe('valid Words actions', () => {
    it('loadWordsSuccess should return the list of known Words', () => {
      const words = [createWords('PRODUCT-AAA'), createWords('PRODUCT-zzz')];
      const action = WordsActions.loadWordsSuccess({ words });

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
