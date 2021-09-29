import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WordsModule } from '@hangman-application/words';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [AppComponent],
  imports: [
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    BrowserModule,
    WordsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
