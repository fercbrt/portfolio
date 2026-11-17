import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FieldErrors } from './field-errors';
import { signal } from '@angular/core';
import { form } from '@angular/forms/signals';

describe('FieldErrors', () => {
  let component: FieldErrors;
  let fixture: ComponentFixture<FieldErrors>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FieldErrors],
    }).compileComponents();

    const testForm = TestBed.runInInjectionContext(() =>
      form(signal({name: ''}))
    );

    fixture = TestBed.createComponent(FieldErrors);
    fixture.componentRef.setInput('field', testForm.name);
    fixture.componentRef.setInput('errorsId', 'name-errors');
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
