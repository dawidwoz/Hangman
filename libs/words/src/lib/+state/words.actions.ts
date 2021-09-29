import { Words } from '@hangman-application/interfaces';
import { createAction, props } from '@ngrx/store';
export const init = createAction('[Words Page] Init');

export const loadWords = createAction('[Words Page] Load Words');

export const loadWordsSuccess = createAction(
  '[Words/API] Load Words Success',
  props<{ data: Words }>()
);

export const loadWordsFailure = createAction(
  '[Words/API] Load Words Failure',
  props<{ error: string | null }>()
);
