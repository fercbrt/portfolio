import { Component, input, output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-error-message',
  templateUrl: './error-message.html',
  host: {
    role: 'alert',
    class: 'block'
  }
})
export class ErrorMessage {
  public readonly message = input.required<string>();
  public readonly retry = output<void>();
}
