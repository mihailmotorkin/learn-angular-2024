/* eslint-disable no-console */
import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {IProduct} from 'src/app/shared/products/product.interface';
import {ProductsStoreService} from 'src/app/shared/products/products-store.service';
import {LoadDirection} from 'src/app/shared/scroll-with-loading/scroll-with-loading.directive';
// import {LoadDirection} from 'src/app/shared/test-from-event/test-from-event.directive';

@Component({
    selector: 'app-products-list',
    templateUrl: './products-list.component.html',
    styleUrls: ['./products-list.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsListComponent implements OnInit {
    constructor(private readonly productsStoreService: ProductsStoreService) {}

    readonly products$ = this.productsStoreService.products$;

    name = '';

    ngOnInit() {
        this.productsStoreService.loadProducts();
    }

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
