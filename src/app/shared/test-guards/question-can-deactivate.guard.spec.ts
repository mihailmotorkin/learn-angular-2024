import {TestBed} from '@angular/core/testing';
import {CanDeactivateFn} from '@angular/router';

import {questionCanDeactivateGuard} from './question-can-deactivate.guard';

describe('questionCanDeactivateGuard', () => {
    const executeGuard: CanDeactivateFn = (...guardParameters) =>
        TestBed.runInInjectionContext(() => questionCanDiactivateGuard(...guardParameters));

    beforeEach(() => {
        TestBed.configureTestingModule({});
    });

    it('should be created', () => {
        expect(executeGuard).toBeTruthy();
    });
});
