import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectsPage } from './projects-page';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';
import { Project } from '../../models/project';

const ownProject: Project = {
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

const forkedProject: Project = { ...ownProject, id: 2, name: 'Forked', fork: true };

describe('ProjectsPage', () => {
  let component: ProjectsPage;
  let httpTesting: HttpTestingController;
  let fixture: ComponentFixture<ProjectsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectsPage],
      providers: [provideHttpClient(), provideHttpClientTesting()],
    }).compileComponents();

    httpTesting = TestBed.inject(HttpTestingController);

    fixture = TestBed.createComponent(ProjectsPage);
    component = fixture.componentInstance;
    TestBed.tick();

    httpTesting
      .expectOne((req) => req.url.includes('/repos'))
      .flush([ownProject, forkedProject]);

    await fixture.whenStable();
  });

  afterEach(() => httpTesting.verify());

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should hide forked projects', () => {
    const cards = fixture.nativeElement.querySelectorAll('app-project-card');
    expect(cards.length).toBe(1);
  });
});
