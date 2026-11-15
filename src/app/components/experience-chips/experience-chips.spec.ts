import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExperienceChips } from './experience-chips';

describe('ExperienceChips', () => {
  let component: ExperienceChips;
  let fixture: ComponentFixture<ExperienceChips>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExperienceChips],
    }).compileComponents();

    fixture = TestBed.createComponent(ExperienceChips);
    fixture.componentRef.setInput('technologies', ['Example']);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
