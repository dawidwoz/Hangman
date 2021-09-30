import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'hangman-application-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
})
export class NotificationComponent {
  @Input() public isOpen: boolean = false;
  @Input() public message: string = '';
  @Output() public onCloseEvent: EventEmitter<boolean> =
    new EventEmitter<boolean>();
  constructor() {}

  public onClose(): void {
    this.isOpen = false;
    this.onCloseEvent.emit(true);
  }
}
