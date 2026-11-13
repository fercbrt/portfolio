import { Component, computed, effect, inject, signal } from '@angular/core';
import { Section } from '../../components/section/section';
import { ExperienceCard } from '../../components/experience-card/experience-card';
import { ExperienceService } from '../../services/experience-service/experience-service';
import { Title } from '@angular/platform-browser';
import { ProfileService } from '../../services/profile-service/profile-service';

@Component({
  imports: [Section, ExperienceCard],
  selector: 'app-experience-page',
  styleUrl: './experience-page.css',
  templateUrl: './experience-page.html',
})
export class ExperiencePage {
  private readonly experienceService = inject(ExperienceService);
  private readonly profileService = inject(ProfileService);

  private readonly title = inject(Title);

  protected readonly name = this.profileService.name;

  protected readonly experiences = signal(this.experienceService.getData());
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

  constructor() {
    effect(() => {
      const selectedTech = this.selectedTechnology();
      if (selectedTech === null){
        this.title.setTitle(this.name + ' | Portfolio');
      }
      else {
        this.title.setTitle(selectedTech + ' | ' + this.name)
      }
    });
  }
}
