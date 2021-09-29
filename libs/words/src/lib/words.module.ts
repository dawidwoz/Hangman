import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';

import * as fromWords from './+state/words.reducer';
import { WordsEffects } from './+state/words.effects';
import { WordsFacade } from './+state/words.facade';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(fromWords.WORDS_FEATURE_KEY, fromWords.reducer),
    EffectsModule.forFeature([WordsEffects]),
    HttpClientModule,
  ],
  providers: [WordsFacade],
})
export class WordsModule {}
