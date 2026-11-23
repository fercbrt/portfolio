import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectCard } from './project-card';
import { Project } from '../../models/project';

describe('ProjectCard', () => {
  let component: ProjectCard;
  let fixture: ComponentFixture<ProjectCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectCard],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectCard);
    const mockProject: Project = {
      id: 1,
      name: 'Project Mock',
      description: null,
      html_url: 'http://example.com',
      homepage: null,
      language: null,
      topics: [],
      stargazers_count: 0,
      updated_at: '2000-01-01',
      fork: false,
    };
    fixture.componentRef.setInput('project', mockProject);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
