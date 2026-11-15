import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExperiencePage } from './experience-page';
import { provideRouter } from '@angular/router';

describe('ExperiencePage', () => {
  let component: ExperiencePage;
  let fixture: ComponentFixture<ExperiencePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExperiencePage],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(ExperiencePage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
