import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Header } from './components/header/header';
import { Section } from './components/section/section';
import { Footer } from './components/footer/footer';
import { ExperienceService } from './services/experience/experience-service';
import { ExperienceCard } from './components/experience-card/experience-card';

@Component({
  imports: [RouterOutlet, Header, Section, Footer, ExperienceCard],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  private readonly experienceService = inject(ExperienceService);

  protected readonly role = signal('Software Engineer');
  protected readonly name = signal('Fernando Calvino Balonero');
  protected readonly experiences = this.experienceService.getData();
}
