import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'hangman-application-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit, OnChanges {
  @Input() public word: string | undefined;
  public wordLetters: Array<string> = [];
  public wordShown: Array<string> = [];
  @Output() wordGuessed: EventEmitter<boolean> = new EventEmitter<boolean>();
  public constructor() {}

  public ngOnInit(): void {
    this.wordPreparation();
  }
  public ngOnChanges(changes: SimpleChanges) {
    if (this.word) this.wordPreparation();
  }

  public wordPreparation(): void {
    if (this.word) {
      this.wordLetters = Array.from(this.word);
      this.wordShown = Array.from(this.word).map(() => '_');
    }
  }
  public checkLetter(letter: string): boolean {
    const result: Array<number> = [];
    console.log(this.word);
    this.wordLetters.forEach((currentLetter, index) =>
      currentLetter === letter ? result.push(index) : null
    );
    if (result.length !== 0) {
      result.forEach(
        (index) => (this.wordShown[index] = this.wordLetters[index])
      );
      this.isWordGuessed();
      return true;
    }
    return false;
  }

  private isWordGuessed(): void {
    this.wordLetters.toString() === this.wordShown.toString()
      ? this.wordGuessed.emit(true)
      : null;
  }
}
