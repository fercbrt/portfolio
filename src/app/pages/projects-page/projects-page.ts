import { Component, inject } from '@angular/core';
import { Section } from '../../components/section/section';
import { ProjectService } from '../../services/project-service/project-service';
import { ProjectSort } from '../../models/project';
import { ToggleChip } from '../../directives/toggle-chip';

@Component({
  imports: [Section, ToggleChip],
  selector: 'app-projects-page',
  templateUrl: './projects-page.html',
})
export class ProjectsPage {
  private readonly projectService = inject(ProjectService);

  protected readonly projects = this.projectService.projects;
  protected readonly projectResource = this.projectService.projectResource;
  
  protected readonly sort = this.projectService.sort;
  protected readonly sortOptions: { value: ProjectSort; label: string }[] = [
    { value: 'created', label: 'Newest' },
    { value: 'updated', label: 'Recently updated' },
    { value: 'pushed', label: 'Recently pushed' },
    { value: 'full_name', label: 'Name (A-Z)' },
  ];

  protected setSort(sort: ProjectSort): void {
    this.projectService.setSort(sort);
  }
}
