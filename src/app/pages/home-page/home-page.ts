import { Component } from '@angular/core';
import { Section } from '../../components/section/section';

@Component({
  imports: [Section],
  selector: 'app-home-page',
  styleUrl: './home-page.css',
  templateUrl: './home-page.html',
})
export class HomePage {}
