/* eslint-disable no-console */
import {Component, OnInit} from '@angular/core';
import {IProduct} from 'src/app/shared/products/product.interface';
import {productsMock} from 'src/app/shared/products/product.mock';

@Component({
    selector: 'app-products-list',
    templateUrl: './products-list.component.html',
    styleUrls: ['./products-list.component.css'],
})
export class ProductsListComponent implements OnInit {
    // readonly products = productsMock;
    productsStore: IProduct[] | null = null;

    get products(): IProduct[] | null {
        console.log('Calculated');

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
}
