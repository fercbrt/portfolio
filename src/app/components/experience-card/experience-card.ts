import { Component, input } from '@angular/core';
import { Experience } from '../../models/experience';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TagList } from '../tag-list/tag-list';

@Component({
  imports: [DatePipe, RouterLink, TagList],
  selector: 'app-experience-card',
  styleUrl: './experience-card.css',
  templateUrl: './experience-card.html',
})
export class ExperienceCard {
  readonly experience = input.required<Experience>();
}
