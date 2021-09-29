import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Words } from '@hangman-application/interfaces';
import { WordsFacade } from '@hangman-application/words';
import { filter, switchMap, take, tap } from 'rxjs/operators';

@Component({
  selector: 'hangman-application-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public words: string[] = [];
  constructor(
    private readonly http: HttpClient,
    private readonly wordsFacade: WordsFacade
  ) {}

  public ngOnInit(): void {
    this.wordsFacade.loadWords();
    this.wordsFacade.loaded$
      .pipe(
        filter((loaded) => loaded === true),
        switchMap(() => this.wordsFacade.allWords$),
        take(1),
        tap((words: string[]) => {
          this.words = words;
          console.log(this.words);
        })
      )
      .subscribe();
  }
}
