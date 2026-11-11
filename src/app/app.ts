import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Header } from './header/header';
import { Section } from './section/section';
import { Footer } from './footer/footer';

@Component({
  imports: [RouterOutlet, Header, Section, Footer],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly role = signal('Software Engineer');
  protected readonly name = signal('Fernando Calvino Balonero');
}
