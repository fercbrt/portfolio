import { Component, computed, effect, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Header } from './components/header/header';
import { Section } from './components/section/section';
import { Footer } from './components/footer/footer';
import { ExperienceService } from './services/experience/experience-service';
import { ExperienceCard } from './components/experience-card/experience-card';
import { Title } from '@angular/platform-browser';

@Component({
  imports: [RouterOutlet, Header, Section, Footer, ExperienceCard],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  private readonly experienceService = inject(ExperienceService);
  private readonly title = inject(Title);

  protected readonly role = signal('Software Engineer');
  protected readonly name = signal('Fernando Calvino Balonero');
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
        this.title.setTitle(this.name() + ' | Portfolio');
      }
      else {
        this.title.setTitle(selectedTech + ' | ' + this.name())
      }
    });
  }
}
