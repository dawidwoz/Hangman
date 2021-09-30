import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'hangman-application-letters',
  templateUrl: './letters.component.html',
  styleUrls: ['./letters.component.scss'],
})
export class LettersComponent implements OnInit, OnDestroy {
  public alphabet: string[] = [];
  public wasClicked: boolean[] = [];
  @Input() public shouldReset!: Observable<void>;
  @Output() public letterClicked: EventEmitter<string> =
    new EventEmitter<string>();
  private shouldResetSubscription?: Subscription;
  public constructor() {}

  public ngOnInit(): void {
    const alpha = Array.from(Array(26)).map((e, i) => i + 65);
    this.alphabet = alpha.map((x) => String.fromCharCode(x));
    this.reset();
    this.shouldResetSubscription = this.shouldReset.subscribe(() => {
      this.reset();
    });
  }

  public ngOnDestroy(): void {
    this.shouldResetSubscription?.unsubscribe();
  }

  public onClick(i: number): void {
    this.wasClicked[i] = true;
    this.letterClicked.emit(this.alphabet[i]);
  }

  public reset(): void {
    this.wasClicked = this.alphabet.map(() => false);
  }
}
