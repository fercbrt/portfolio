import { Routes } from '@angular/router';
import { HomePage } from './pages/home-page/home-page';
import { experienceExistsGuard } from './guards/experience-exists-guard';

export const routes: Routes = [
    {
        path: '',
        title: 'Home | Portfolio',
        component: HomePage
    },
    {
        path: 'experience',
        title: 'Experience | Portfolio',
        loadComponent:() => import('./pages/experience-page/experience-page').then(m => m.ExperiencePage),
    },
    {
        path: 'experience/:id',
        title: 'Experience detail | Portfolio',
        canMatch: [experienceExistsGuard],
        loadComponent: () => import('./pages/experience-detail-page/experience-detail-page').then(m => m.ExperienceDetailPage),
    },
    {
        path: 'contact',
        title: 'Contact | Portfolio',
        loadComponent: () => import('./pages/contact-page/contact-page').then(m => m.ContactPage),
    },
    {
        path: '**',
        title: '404 | Portfolio',
        loadComponent: () => import('./pages/not-found-page/not-found-page').then(m => m.NotFoundPage),
    }
];
