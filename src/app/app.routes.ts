import { Routes } from '@angular/router';
import { HomePage } from './pages/home-page/home-page';
import { ExperiencePage } from './pages/experience-page/experience-page';

export const routes: Routes = [
    {
        path: '',
        component: HomePage
    },
    {
        path: 'experience',
        component: ExperiencePage
    }
];
