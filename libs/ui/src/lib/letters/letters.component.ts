import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'hangman-application-letters',
  templateUrl: './letters.component.html',
  styleUrls: ['./letters.component.scss'],
})
export class LettersComponent implements OnInit {
  public alphabet: string[] = [];
  public wasClicked: boolean[] = [];

  @Output() letterClicked: EventEmitter<string> = new EventEmitter<string>();
  public constructor() {}

  public ngOnInit(): void {
    const alpha = Array.from(Array(26)).map((e, i) => i + 65);
    this.alphabet = alpha.map((x) => String.fromCharCode(x));
    this.wasClicked = alpha.map(() => false);
  }

  public onClick(i: number): void {
    this.wasClicked[i] = true;
    this.letterClicked.emit(this.alphabet[i]);
  }
}
