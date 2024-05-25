/* eslint-disable prettier/prettier */
/* eslint-disable import/no-unresolved */
import {TestBed} from '@angular/core/testing';

import {BrandsService} from './brands.service';

describe('BrandsService', () => {
    let service: BrandsService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(BrandsService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});