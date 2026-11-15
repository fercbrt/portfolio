import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-experience-chips',
  styleUrl: './experience-chips.css',
  templateUrl: './experience-chips.html',
})
export class ExperienceChips {
  readonly technologies = input.required<string[]>();
}