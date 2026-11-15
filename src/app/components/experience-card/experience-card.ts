import { Component, input } from '@angular/core';
import { Experience } from '../../models/experience';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ExperienceChips } from '../experience-chips/experience-chips';

@Component({
  imports: [DatePipe, RouterLink, ExperienceChips],
  selector: 'app-experience-card',
  styleUrl: './experience-card.css',
  templateUrl: './experience-card.html',
})
export class ExperienceCard {
  readonly experience = input.required<Experience>();
}
