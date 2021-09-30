import {
  Component,
  Input,
  OnChanges,
  OnInit,
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
  public constructor() {}

  public ngOnInit(): void {
    this.calculateWord();
  }
  public ngOnChanges(changes: SimpleChanges) {
    if (this.word) this.calculateWord();
  }

  public calculateWord(): void {
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
      console.log(this.wordShown);
      return true;
    }
    return false;
  }
}
