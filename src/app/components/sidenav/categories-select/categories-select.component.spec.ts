import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CategoriesSelectComponent} from './categories-select.component';

describe('CategoriesSelectComponent', () => {
    let component: CategoriesSelectComponent;
    let fixture: ComponentFixture<CategoriesSelectComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [CategoriesSelectComponent],
        });
        fixture = TestBed.createComponent(CategoriesSelectComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
