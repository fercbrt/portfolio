import { computed, inject, Service, signal } from '@angular/core';
import { ProfileService } from '../profile-service/profile-service';
import { httpResource } from '@angular/common/http';
import { Project, ProjectSort } from '../../models/project';

@Service()
export class ProjectService {
    private readonly profileService = inject(ProfileService);
    private readonly _sort = signal<ProjectSort>('updated');
    private readonly _projectResource = httpResource<Project[]>(() => ({
        url: `https://api.github.com/users/${this.profileService.githubUsername}/repos`,
        params: {
            sort: this._sort(),
            per_page: 100
        }
    }));

    public readonly projectResource = this._projectResource.asReadonly();
    public readonly sort = this._sort.asReadonly();

    public readonly projects = computed(() =>
        this._projectResource.hasValue()
            ? this._projectResource.value().filter(project => !project.fork)
            : []
    );

    setSort(sort: ProjectSort): void {
        this._sort.set(sort);
    }
}
