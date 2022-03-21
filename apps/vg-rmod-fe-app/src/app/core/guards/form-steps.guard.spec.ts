import { TestBed } from '@angular/core/testing';

import { FormStepsGuard } from './form-steps.guard';

describe('FormStepsGuard', () => {
  let guard: FormStepsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(FormStepsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
