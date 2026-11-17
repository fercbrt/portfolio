import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExperienceDetailPage } from './experience-detail-page';
import { provideRouter, withComponentInputBinding } from '@angular/router';

describe('ExperienceDetailPage', () => {
  let component: ExperienceDetailPage;
  let fixture: ComponentFixture<ExperienceDetailPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExperienceDetailPage],
      providers: [provideRouter([])]
    }).compileComponents();

    fixture = TestBed.createComponent(ExperienceDetailPage);
    fixture.componentRef.setInput('id', '1');
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
