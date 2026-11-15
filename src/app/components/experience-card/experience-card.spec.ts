import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExperienceCard } from './experience-card';
import { provideRouter } from '@angular/router';
import { Experience } from '../../models/experience';

describe('ExperienceCard', () => {
  let component: ExperienceCard;
  let fixture: ComponentFixture<ExperienceCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExperienceCard],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(ExperienceCard);
    const mockExperience: Experience = {
      id: 1,
      company: 'Company Example',
      position: 'Position Example',
      description: 'Description Example',
      startDate: '01-01-1999',
      technologies: ['TechExample']
    }
    fixture.componentRef.setInput('experience', mockExperience);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
