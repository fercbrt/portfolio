import { Component, input } from '@angular/core';
import { PageHeading } from '../page-heading/page-heading';

@Component({
  imports: [PageHeading],
  selector: 'app-section',
  styleUrl: './section.css',
  templateUrl: './section.html',
})
export class Section {
  readonly heading = input.required<string>();
}
