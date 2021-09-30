import { Component, OnInit, ViewChild } from '@angular/core';
import { WordsFacade } from '@hangman-application/words';
import { Subject } from 'rxjs';
import { filter, first, switchMap } from 'rxjs/operators';
import { BoardComponent } from '../board/board.component';

@Component({
  selector: 'hangman-application-main-wrapper',
  templateUrl: './main-wrapper.component.html',
  styleUrls: ['./main-wrapper.component.scss'],
})
export class MainWrapperComponent implements OnInit {
  @ViewChild(BoardComponent)
  private boardComponent?: BoardComponent;
  public words: string[] = [];
  public wordNumber: number = 0;
  public failedNumber: number = 0;
  public resetSubject: Subject<void> = new Subject<void>();
  public isNotificationOpen: boolean = false;
  public notificationMessage: string = '';
  public constructor(private readonly wordsFacade: WordsFacade) {}

  public ngOnInit(): void {
    this.giveMeWords();
  }

  public onLetterClicked(letter: string): void {
    const isPresent = this.boardComponent?.checkLetter(letter.toLowerCase());
    if (!isPresent && this.failedNumber === 5) {
      this.notificationMessage = 'Bug is in the production. Try again!';
      this.isNotificationOpen = true;
      this.resetApp();
    } else !isPresent ? this.failedNumber++ : null;
  }

  public onWordGuessed(isWordGuessed: boolean): void {
    this.wordNumber++;
    if (this.wordNumber === 5) {
      this.notificationMessage = "The winner is you! Let's play again!";
      this.isNotificationOpen = true;
      this.resetApp();
    }
    this.failedNumber = 0;
    this.resetSubject.next();
  }

  public onCloseNotification(isClose: boolean): void {
    this.isNotificationOpen = false;
  }

  private giveMeWords(): void {
    this.wordsFacade.loadWords();
    this.wordsFacade.loaded$
      .pipe(
        filter((isLoaded: boolean) => isLoaded === true),
        switchMap(() => this.wordsFacade.allWords$),
        first()
      )
      .subscribe((words: string[]) => {
        this.words = words;
      });
  }
  private resetApp(): void {
    this.wordNumber = 0;
    this.failedNumber = 0;
    this.resetSubject.next();
    this.giveMeWords();
  }
}
