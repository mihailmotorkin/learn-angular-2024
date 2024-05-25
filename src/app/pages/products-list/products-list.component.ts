/* eslint-disable no-console */
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {AbstractControl, FormControl, ValidationErrors, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {
    Observable,
    debounceTime,
    distinctUntilChanged,
    map,
    startWith,
    switchMap,
    tap,
    timer,
} from 'rxjs';
import {BrandsService} from 'src/app/shared/brands/brands.service';
import {IProduct} from 'src/app/shared/products/product.interface';
import {ProductsStoreService} from 'src/app/shared/products/products-store.service';
import {isStringValidator} from 'src/app/shared/test-validators/is-string-validator';

@Component({
    selector: 'app-products-list',
    templateUrl: './products-list.component.html',
    styleUrls: ['./products-list.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [],
})
export class ProductsListComponent {
    readonly products$ = this.activatedRoute.paramMap.pipe(
        map(paramMap => paramMap.get('subCategoryId')),
        tap(subCategoryId => {
            this.productsStoreService.loadProducts(subCategoryId);
        }),
        switchMap(() => this.productsStoreService.products$),
    );

    readonly brands$ = this.activatedRoute.paramMap.pipe(
        map(paramMap => paramMap.get('subCategoryId')),
        tap(subCategoryId => {
            this.brandsService.loadBrands(subCategoryId);
        }),
        switchMap(() => this.brandsService.brands$),
    );

    readonly searchForm = new FormControl('', {
        validators: [Validators.minLength(3), Validators.required],
        asyncValidators: [this.asyncValidator.bind(this)],
    });

    readonly counterForm = new FormControl(10);

    readonly searchFormValue$ = this.searchForm.valueChanges.pipe(
        startWith(this.searchForm.value),
        debounceTime(300),
        distinctUntilChanged(),
    );

    readonly searchFormErrors$ = this.searchForm.statusChanges.pipe(
        tap(console.log),
        map(status => (status === 'INVALID' ? this.searchForm.errors : null)),
    );

    counter = 5;

    searchName = '';

    constructor(
        private readonly productsStoreService: ProductsStoreService,
        private readonly activatedRoute: ActivatedRoute,
        private readonly brandsService: BrandsService,
    ) {}

    trackById(_index: number, item: IProduct): IProduct['_id'] {
        return item._id;
    }

    onBuyProduct(id: IProduct['_id']) {
        console.log(id, 'from ProductListComponent');
    }

    private asyncValidator(control: AbstractControl): Observable<ValidationErrors | null> {
        return timer(3000).pipe(map(() => isStringValidator(control)));
    }
}
