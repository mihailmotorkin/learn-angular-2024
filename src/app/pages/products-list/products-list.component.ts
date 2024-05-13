/* eslint-disable no-console */
import {Component, OnInit} from '@angular/core';
import {IProduct} from 'src/app/shared/products/product.interface';
import {productsMock} from 'src/app/shared/products/product.mock';
// import {LoadDirection} from 'src/app/shared/scroll-with-loading/scroll-with-loading.directive';
import {LoadDirection} from 'src/app/shared/test-from-event/test-from-event.directive';

@Component({
    selector: 'app-products-list',
    templateUrl: './products-list.component.html',
    styleUrls: ['./products-list.component.css'],
})
export class ProductsListComponent implements OnInit {
    productsStore: IProduct[] | null = null;

    get products(): IProduct[] | null {
        return this.productsStore;
    }

    ngOnInit(): void {
        setTimeout(() => {
            this.productsStore = productsMock;
        }, 3000);
        // setTimeout(() => {
        //     this.products = null;
        // }, 5000);
    }

    onBuyProduct(id: IProduct['_id']) {
        console.log(id, 'from ProductListComponent');
    }

    onLoad(direction: LoadDirection) {
        console.log(`Load ${direction} data from product-list-component`);
    }
}
