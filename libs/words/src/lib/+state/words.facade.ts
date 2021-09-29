import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as WordsActions from './words.actions';
import * as WordsSelectors from './words.selectors';

@Injectable()
export class WordsFacade {
  public readonly loaded$: Observable<boolean> = this.store.pipe(
    select(WordsSelectors.getWordsLoaded)
  );
  public readonly allWords$: Observable<string[]> = this.store.pipe(
    select(WordsSelectors.getAllWords)
  );

  constructor(private readonly store: Store) {}
  public init(): void {
    this.store.dispatch(WordsActions.init());
  }
  public loadWords(): void {
    this.store.dispatch(WordsActions.loadWords());
  }
}
