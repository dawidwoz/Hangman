import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Words } from '@hangman-application/interfaces';

@Component({
  selector: 'hangman-application-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  words$ = this.http.get<Words>('/api/words');
  constructor(private readonly http: HttpClient) {}
}
