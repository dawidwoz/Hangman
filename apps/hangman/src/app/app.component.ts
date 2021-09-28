import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Words } from '@hangman-application/api-interfaces';

@Component({
  selector: 'hangman-application-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  hello$ = this.http.get<Words>('/api/words');
  constructor(private http: HttpClient) {}
}
