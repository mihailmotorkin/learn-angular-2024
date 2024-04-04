/* eslint-disable no-console */
import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IProduct} from 'src/app/shared/products/product.interface';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css'],
})
export class CardComponent {
    @Input() product: IProduct | undefined;
    @Output() readonly buyProduck = new EventEmitter<IProduct['_id']>();

    onBuyProduct(event: Event) {
        event.stopPropagation();
        console.log(`${this.product?._id} from CardComponent`);
        this.buyProduck.emit(this.product?._id);
    }

    isStarActive(starIndex: number): boolean {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        return this.product!.rating >= starIndex;
    }
}
