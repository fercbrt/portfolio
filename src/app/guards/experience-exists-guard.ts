import { inject, numberAttribute } from '@angular/core';
import { CanMatchFn } from '@angular/router';
import { ExperienceService } from '../services/experience-service/experience-service';

export const experienceExistsGuard: CanMatchFn = (route, segments) => {
  const experienceService = inject(ExperienceService);
  const id = numberAttribute(segments[1]?.path);
  return experienceService.getExperience(id) !== undefined;
};
