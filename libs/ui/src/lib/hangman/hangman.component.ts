import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'hangman-application-hangman',
  templateUrl: './hangman.component.html',
  styleUrls: ['./hangman.component.scss'],
})
export class HangmanComponent implements OnInit {
  @Input() public stepOfTheBug: number = 0;
  constructor() {}

  ngOnInit(): void {}
}
