import { createReducer, on, Action } from '@ngrx/store';

import * as WordsActions from './words.actions';

export const WORDS_FEATURE_KEY = 'words';

export interface State {
  words: string[];
  loaded: boolean; // has the Words list been loaded
  error?: string | null; // last known error (if any)
}

export interface WordsPartialState {
  readonly [WORDS_FEATURE_KEY]: State;
}

export const initialState: State = {
  words: [],
  error: null,
  loaded: false,
};

const wordsReducer = createReducer(
  initialState,
  on(WordsActions.init, (state) => ({ ...state, loaded: false, error: null })),
  on(WordsActions.loadWordsSuccess, (state, { data }) => ({
    ...state,
    words: data.words,
    loaded: true,
    error: null,
  })),
  on(WordsActions.loadWordsFailure, (state, { error }) => ({ ...state, error }))
);

export function reducer(state: State | undefined, action: Action) {
  return wordsReducer(state, action);
}
