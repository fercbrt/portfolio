import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { ProfileService } from './services/profile-service/profile-service';

@Component({
  imports: [RouterOutlet, Header, Footer],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  private readonly profileService = inject(ProfileService);
  
  protected readonly role = this.profileService.role;
  protected readonly name = this.profileService.name;
}
