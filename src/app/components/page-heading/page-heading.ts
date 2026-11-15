import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-page-heading',
  styleUrl: './page-heading.css',
  templateUrl: './page-heading.html',
})
export class PageHeading {
  readonly heading = input.required<string>();
}
