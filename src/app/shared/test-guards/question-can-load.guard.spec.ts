import { TestBed } from '@angular/core/testing';
import { CanMatchFn } from '@angular/router';

import { questionCanLoadGuard } from './question-can-load.guard';

describe('questionCanLoadGuard', () => {
  const executeGuard: CanMatchFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => questionCanLoadGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
