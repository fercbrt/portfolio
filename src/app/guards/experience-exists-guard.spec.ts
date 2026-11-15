import { TestBed } from '@angular/core/testing';
import { CanMatchFn } from '@angular/router';
import { experienceExistsGuard } from './experience-exists-guard';

describe('experienceExistsGuard', () => {
  const executeGuard: CanMatchFn = (...guardParameters) =>
    TestBed.runInInjectionContext(() => experienceExistsGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
