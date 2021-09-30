import { Component, OnInit, ViewChild } from '@angular/core';
import { WordsFacade } from '@hangman-application/words';
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
  public constructor(private readonly wordsFacade: WordsFacade) {}

  public ngOnInit(): void {
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

  public onLetterClicked(letter: string): void {
    this.boardComponent?.checkLetter(letter.toLowerCase());
  }
}
