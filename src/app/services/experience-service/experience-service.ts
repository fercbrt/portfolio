import { computed, ResourceStatus, Service } from '@angular/core';
import { Experience } from '../../models/experience';
import { httpResource } from '@angular/common/http';
import { toObservable } from '@angular/core/rxjs-interop';
import { filter, firstValueFrom } from 'rxjs';

@Service()
export class ExperienceService {

    private readonly _experienceResource = httpResource<Experience[]>(() => '/data/experiences.json');
    private readonly _resourceStatus$ = toObservable(this._experienceResource.status);

    public readonly experienceResource = this._experienceResource.asReadonly();

    public readonly experiences = computed(() => this._experienceResource.hasValue() ? this._experienceResource.value() : []);

    getExperience(id: number): Experience | undefined {
        return this.experiences().find(experience => experience.id === id);
    }

    whenLoaded(): Promise<ResourceStatus> {
        return firstValueFrom(
            this._resourceStatus$.pipe(
                filter(status => ['resolved', 'error'].includes(status))
            )
        );
    }
}
