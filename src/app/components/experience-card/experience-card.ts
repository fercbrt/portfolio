import { Component, input } from '@angular/core';
import { Experience } from '../../models/experience';
import { DatePipe } from '@angular/common';

@Component({
  imports: [DatePipe],
  selector: 'app-experience-card',
  styleUrl: './experience-card.css',
  templateUrl: './experience-card.html',
})
export class ExperienceCard {
  readonly experience = input.required<Experience>();
}
