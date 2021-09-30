import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'hangman-application-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  private _word: string | undefined;

  @Input() set word(value: string | undefined) {
    this._word = value;
    this.wordPreparation();
  }
  get word(): string | undefined {
    return this._word;
  }

  @Input() public chances: number = 0;
  @Input() public streak: number = 0;
  public wordLetters: Array<string> = [];
  public wordShown: Array<string> = [];
  @Output() wordGuessed: EventEmitter<boolean> = new EventEmitter<boolean>();
  public constructor() {}

  public ngOnInit(): void {
    this.wordPreparation();
  }

  public wordPreparation(): void {
    if (this.word) {
      this.wordLetters = Array.from(this.word);
      this.wordShown = Array.from(this.word).map(() => '_');
    }
  }
  public checkLetter(letter: string): boolean {
    const result: Array<number> = [];
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
