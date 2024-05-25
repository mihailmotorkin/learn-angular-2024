import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    OnChanges,
    OnInit,
    Output,
    SimpleChanges,
} from '@angular/core';
import {FormArray, FormBuilder, FormControl} from '@angular/forms';
import {Observable, map} from 'rxjs';
import {IProductsFilter} from './products-filter.interface';
import {IProductsFilterForm} from './products-filter-form.interface';

@Component({
    selector: 'app-filter',
    templateUrl: './filter.component.html',
    styleUrls: ['./filter.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterComponent implements OnChanges, OnInit {
    @Input() brands: string[] | null = null;

    @Output() changeFilter = new EventEmitter<IProductsFilter>();

    readonly filterForm = this.formBuilder.group({
        name: '',
        priceRange: this.formBuilder.group({
            min: 0,
            max: 999999,
        }),
        brands: this.formBuilder.array<FormControl<boolean>>([]),
    });

    constructor(private readonly formBuilder: FormBuilder) {}

    ngOnInit() {
        this.listenFormChange();
    }

    ngOnChanges({brands}: SimpleChanges) {
        if (brands) {
            this.updateBrandsControl();
        }
    }

    private updateBrandsControl() {
        const brandsControls = this.brands
            ? this.brands.map(() => new FormControl(false) as FormControl<boolean>)
            : ([] as Array<FormControl<boolean>>);

        const brandsForm = new FormArray<FormControl<boolean>>(brandsControls);

        this.filterForm.setControl('brands', brandsForm);
    }

    private listenFormChange() {
        const changeFormValue$ = this.filterForm.valueChanges as Observable<IProductsFilterForm>;

        changeFormValue$
            .pipe(
                map(
                    ({brands, ...otherFormsValue}): IProductsFilter => ({
                        ...otherFormsValue,
                        brands: this.getSelectedBrands(brands as boolean[]),
                    }),
                ),
            )
            // eslint-disable-next-line no-console
            .subscribe(console.log);
    }

    private getSelectedBrands(brandSelection: boolean[]): string[] {
        return this.brands ? this.brands.filter((_brand, index) => brandSelection[index]) : [];
    }
}
