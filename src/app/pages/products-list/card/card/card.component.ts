/* eslint-disable no-console */
import {Component} from '@angular/core';
import {productMock} from 'src/app/shared/products/product.mock';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css'],
})
export class CardComponent {
    products = productMock;

    onBuyClick(event: Event) {
        event.stopPropagation();
        console.log('Buy click!');
    }

    isStarActive(starIndex: number): boolean {
        return this.products.rating >= starIndex;
    }
}
