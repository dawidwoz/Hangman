import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainWrapperComponent } from './main-wrapper/main-wrapper.component';
import { LettersComponent } from './letters/letters.component';
import { NotificationComponent } from './notification/notification.component';
import { HangmanComponent } from './hangman/hangman.component';
import { BoardComponent } from './board/board.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    MainWrapperComponent,
    LettersComponent,
    NotificationComponent,
    HangmanComponent,
    BoardComponent,
    FooterComponent
  ],
  exports: [
    MainWrapperComponent,
    LettersComponent,
    NotificationComponent,
    HangmanComponent,
    BoardComponent,
    FooterComponent
  ],
})
export class UiModule {}
