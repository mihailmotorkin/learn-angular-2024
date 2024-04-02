/* eslint-disable no-console */
import {Component} from '@angular/core';

@Component({
    selector: 'app-products-list',
    templateUrl: './products-list.component.html',
    styleUrls: ['./products-list.component.css'],
})
export class ProductsListComponent {
    onCardClick() {
        console.log('Card click! from product-list');
    }
}
