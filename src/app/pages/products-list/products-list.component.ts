/* eslint-disable no-console */
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {map, switchMap, tap} from 'rxjs';
import {IProduct} from 'src/app/shared/products/product.interface';
import {ProductsStoreService} from 'src/app/shared/products/products-store.service';
import {LoadDirection} from 'src/app/shared/scroll-with-loading/scroll-with-loading.directive';

@Component({
    selector: 'app-products-list',
    templateUrl: './products-list.component.html',
    styleUrls: ['./products-list.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [],
})
export class ProductsListComponent {
    constructor(
        private readonly productsStoreService: ProductsStoreService,
        private readonly activatedRoute: ActivatedRoute,
    ) {}

    // readonly products$ = this.activatedRoute.paramMap.pipe(
    //     map(paramMap => paramMap.get('subCategoryId')),
    //     tap(subCategoryId => {
    //         this.productsStoreService.loadProducts(subCategoryId);
    //     }),
    //     switchMap(() => this.productsStoreService.products$),
    // );

    readonly products$ = this.activatedRoute.data.pipe(
        tap(console.log),
        map(({products}) => products as IProduct[]),
    );

    name = '';

    trackById(_index: number, item: IProduct): IProduct['_id'] {
        return item._id;
    }

    onBuyProduct(id: IProduct['_id']) {
        console.log(id, 'from ProductListComponent');
    }

    onLoad(direction: LoadDirection) {
        console.log(`Load ${direction} data from product-list-component`);
    }
}
