import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArrowLeftCircleIcon } from './arrow-left-circle-icon';

describe('ArrowLeftCircleIcon', () => {
  let component: ArrowLeftCircleIcon;
  let fixture: ComponentFixture<ArrowLeftCircleIcon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArrowLeftCircleIcon],
    }).compileComponents();

    fixture = TestBed.createComponent(ArrowLeftCircleIcon);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
