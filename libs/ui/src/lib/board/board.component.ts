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
  @Input() public word: string = 'Dawid';
  public wordLetters: Array<string> = [];
  public wordShown: Array<boolean> = [];
  public constructor() {}

  public ngOnInit(): void {
    this.calculateWord();
  }
  public ngOnChanges(changes: SimpleChanges) {
    this.calculateWord();
  }

  public calculateWord(): void {
    this.wordLetters = Array.from(this.word);
  }
}
