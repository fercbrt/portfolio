import { computed, Service } from '@angular/core';
import { Experience } from '../../models/experience';
import { httpResource } from '@angular/common/http';

@Service()
export class ExperienceService {

    private readonly _experienceResource = httpResource<Experience[]>(() => '/data/experiences.json');
    public readonly experienceResource = this._experienceResource.asReadonly();

    public readonly experiences = computed(() => this._experienceResource.hasValue() ? this._experienceResource.value() : []);

    getExperience(id: number): Experience | undefined {
        return this.experiences().find(experience => experience.id === id);
    }
}
