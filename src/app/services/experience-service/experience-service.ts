import { Service } from '@angular/core';
import { Experience } from '../../models/experience';

@Service()
export class ExperienceService {
    private readonly experiences: Experience[] = [
        {
            id: 1,
            company: 'Universidad de Extremadura (UEx)',
            position: 'Researcher',
            startDate: '2024-11-11',
            endDate: '2026-02-28',
            description: 'Researcher for the INCIBE-UEx-EPCC chair as a member of the research group Grupo de Ingeniería de Medios (GIM) of the Polytechnic School of Cáceres. Developed a web application for working-time tracking.',
            technologies: [
                'Angular',
                'Spring',
                'Docker',
                'OWASP'
            ]
        },
        {
            id: 2,
            company: 'Grupo Data',
            position: 'Software Engineer',
            startDate: '2026-03-03',
            description: 'Software Engineer in charge of projects related to the development and management of Odoo-based ERP systems and a web application for working-time tracking (DatisGo).',
            technologies: [
                'Angular',
                'Spring',
                'Docker',
                'Odoo'
            ]

        }
    ];

    getData(): Experience[] {
        return [...this.experiences];
    }
}
