import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';
import * as WordsActions from './words.actions';
import { WordsEffects } from './words.effects';
import { WordsFacade } from './words.facade';
import { Words } from '@hangman-application/interfaces';
import { WORDS_FEATURE_KEY, State, reducer } from './words.reducer';

interface TestSchema {
  words: State;
}

describe('WordsFacade', () => {
  let facade: WordsFacade;
  let store: Store<TestSchema>;
  const createWords = (id: string): Words => [id];

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(WORDS_FEATURE_KEY, reducer),
          EffectsModule.forFeature([WordsEffects]),
        ],
        providers: [WordsFacade],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [
          NxModule.forRoot(),
          StoreModule.forRoot({}),
          EffectsModule.forRoot([]),
          CustomFeatureModule,
        ],
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.inject(Store);
      facade = TestBed.inject(WordsFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allWords$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allWords$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadWordsSuccess` to manually update list
     */
    it('allWords$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allWords$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        WordsActions.loadWordsSuccess({
          words: [createWords('AAA'), createWords('BBB')],
        })
      );

      list = await readFirst(facade.allWords$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});
