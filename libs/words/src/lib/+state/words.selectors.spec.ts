import { Words } from '@hangman-application/interfaces';
import { wordsAdapter, WordsPartialState, initialState } from './words.reducer';
import * as WordsSelectors from './words.selectors';

describe('Words Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const createWords = (id: string): Words => [id];

  let state: WordsPartialState;

  beforeEach(() => {
    state = {
      words: wordsAdapter.setAll(
        [
          createWords('PRODUCT-AAA'),
          createWords('PRODUCT-BBB'),
          createWords('PRODUCT-CCC'),
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

  describe('Words Selectors', () => {
    it('getAllWords() should return the list of Words', () => {
      const results = WordsSelectors.getAllWords(state);

      expect(results.length).toBe(3);
    });

    it('getWordsLoaded() should return the current "loaded" status', () => {
      const result = WordsSelectors.getWordsLoaded(state);

      expect(result).toBe(true);
    });

    it('getWordsError() should return the current "error" state', () => {
      const result = WordsSelectors.getWordsError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
