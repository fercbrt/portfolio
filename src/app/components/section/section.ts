import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-section',
  styleUrl: './section.css',
  templateUrl: './section.html',
})
export class Section {
  readonly heading = input.required<string>();
}
