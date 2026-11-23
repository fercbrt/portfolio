import { Component, signal } from '@angular/core';
import { ToggleChip } from './toggle-chip';
import { ComponentFixture, TestBed } from '@angular/core/testing';

@Component({
  imports: [ToggleChip],
  template: `<button type="button" appToggleChip [pressed]="pressed()">Chip</button>`,
})
class TestHost {
  readonly pressed = signal(false);
}

describe('ToggleChip', () => {
  let fixture: ComponentFixture<TestHost>;
  let button: HTMLButtonElement;

  beforeEach(async () => {
    fixture = TestBed.createComponent(TestHost);
    await fixture.whenStable();
    button = fixture.nativeElement.querySelector('button');
  });

  it('should set aria-pressed to false when not pressed', () => {
    expect(button.getAttribute('aria-pressed')).toBe('false');
  });

  it('should update aria-pressed when the host changes the input', async () => {
    fixture.componentInstance.pressed.set(true);
    await fixture.whenStable();
    expect(button.getAttribute('aria-pressed')).toBe('true');
  });
});
