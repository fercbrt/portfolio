import { Component, input } from '@angular/core';
import { Project } from '../../models/project';
import { DatePipe } from '@angular/common';
import { TagList } from '../tag-list/tag-list';

@Component({
  imports: [DatePipe, TagList],
  selector: 'app-project-card',
  styleUrl: './project-card.css',
  templateUrl: './project-card.html',
  host: {
    class: 'block',
  }
})
export class ProjectCard {
  public readonly project = input.required<Project>();
}
