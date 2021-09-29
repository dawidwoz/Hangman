import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Words } from '@hangman-application/interfaces';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import * as wordsActions from './words.actions';

@Injectable()
export class WordsEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly http: HttpClient
  ) {}
  public readonly loadWords$: Observable<Action> = createEffect(() => {
    return this.actions$.pipe(
      ofType(wordsActions.loadWords),
      switchMap(() => this.http.get<Words>('/api/words')),
      map((data: Words) => wordsActions.loadWordsSuccess({ data })),
      catchError((error: string | null) =>
        of(wordsActions.loadWordsFailure({ error }))
      )
    );
  });
}
