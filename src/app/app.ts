import { Component, computed, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Header } from './components/header/header';
import { Section } from './components/section/section';
import { Footer } from './components/footer/footer';
import { ExperienceService } from './services/experience/experience-service';
import { ExperienceCard } from './components/experience-card/experience-card';
import { Experience } from './models/experience';
import { NgClass } from '../../node_modules/@angular/common/types/_common_module-chunk';

@Component({
  imports: [RouterOutlet, Header, Section, Footer, ExperienceCard, NgClass],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  private readonly experienceService = inject(ExperienceService);

  protected readonly role = signal('Software Engineer');
  protected readonly name = signal('Fernando Calvino Balonero');
  protected readonly experiences = signal(this.experienceService.getData());
  protected readonly allTechnologies = computed(() => [... new Set (this.experiences().flatMap(experience => experience.technologies))]);
  protected readonly selectedTechnology = signal<string | null>(null);
  protected readonly filteredExperiences = computed(
    () => {
      if (this.selectedTechnology() === null){
        return [... this.experiences()]
      }
      else {
        return this.experiences().filter(experience => experience.technologies.includes(this.selectedTechnology()!))
      }
    }
  );
}
