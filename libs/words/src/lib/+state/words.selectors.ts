import { createFeatureSelector, createSelector } from '@ngrx/store';
import { WORDS_FEATURE_KEY, State } from './words.reducer';

export const getWordsState = createFeatureSelector<State>(WORDS_FEATURE_KEY);

export const getWordsLoaded = createSelector(
  getWordsState,
  (state: State) => state.loaded
);

export const getWordsError = createSelector(
  getWordsState,
  (state: State) => state.error
);

export const getAllWords = createSelector(
  getWordsState,
  (state: State) => state.words
);
