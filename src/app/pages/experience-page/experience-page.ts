import { Component, computed, effect, inject, signal } from '@angular/core';
import { Section } from '../../components/section/section';
import { ExperienceCard } from '../../components/experience-card/experience-card';
import { ExperienceService } from '../../services/experience-service/experience-service';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ToggleChip } from '../../directives/toggle-chip';
import { ErrorMessage } from '../../components/error-message/error-message';

@Component({
  imports: [Section, ExperienceCard, ToggleChip, ErrorMessage],
  selector: 'app-experience-page',
  styleUrl: './experience-page.css',
  templateUrl: './experience-page.html',
})
export class ExperiencePage {
  private readonly experienceService = inject(ExperienceService);
  private readonly experiences = this.experienceService.experiences;

  private readonly title = inject(Title);
  private readonly route = inject(ActivatedRoute);

  private readonly routeTitle = this.route.snapshot.title ?? 'Portfolio';

  protected readonly allTechnologies = computed(() => [... new Set (this.experiences().flatMap(experience => experience.technologies))]);
  protected readonly selectedTechnology = signal<string | null>(null);
  protected readonly filteredExperiences = computed(
    () => {
      const selectedTech = this.selectedTechnology();
      if (selectedTech === null){
        return this.experiences();
      }
      else {
        return this.experiences().filter(experience => experience.technologies.includes(selectedTech));
      }
    }
  );
  protected readonly experienceResource = this.experienceService.experienceResource;

  constructor() {
    effect(() => {
      const selectedTech = this.selectedTechnology();
      if (selectedTech === null){
        this.title.setTitle(this.routeTitle);
      }
      else {
        this.title.setTitle(`${selectedTech} | ${this.routeTitle}`);
      }
    });
  }

  protected reload(): void {
    this.experienceService.reload();
  }
}
