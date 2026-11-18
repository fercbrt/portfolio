import { Component, computed, inject, input, numberAttribute } from '@angular/core';
import { ExperienceService } from '../../services/experience-service/experience-service';
import { DatePipe } from '@angular/common';
import { ExperienceChips } from '../../components/experience-chips/experience-chips';
import { Section } from '../../components/section/section';
import { RouterLink } from '@angular/router';
import { ArrowLeftCircleIcon } from '../../components/arrow-left-circle-icon/arrow-left-circle-icon';

@Component({
  imports: [DatePipe, ExperienceChips, Section, RouterLink, ArrowLeftCircleIcon],
  selector: 'app-experience-detail-page',
  styleUrl: './experience-detail-page.css',
  templateUrl: './experience-detail-page.html',
})
export class ExperienceDetailPage {
  private readonly experienceService = inject(ExperienceService);
  

  readonly id = input.required({ transform: numberAttribute });

  protected readonly experience = computed(
    () => this.experienceService.getExperience(this.id())
  );
  protected readonly experienceResource = this.experienceService.experienceResource;
}
