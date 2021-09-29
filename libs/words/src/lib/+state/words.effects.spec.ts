import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';
import { Observable } from 'rxjs';

import * as WordsActions from './words.actions';
import { WordsEffects } from './words.effects';

describe('WordsEffects', () => {
  let actions: Observable<Action>;
  let effects: WordsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        WordsEffects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(WordsEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: WordsActions.init() });

      const expected = hot('-a-|', {
        a: WordsActions.loadWordsSuccess({ words: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
