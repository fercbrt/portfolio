import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-tag-list',
  templateUrl: './tag-list.html',
  host: {
    class: 'block',
  }
})
export class TagList {
  readonly tags = input.required<string[]>();
}