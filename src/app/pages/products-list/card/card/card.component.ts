/* eslint-disable no-console */
import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {IProduct} from 'src/app/shared/products/product.interface';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
    @Input() product: IProduct | undefined;
    @Output() readonly buyProduct = new EventEmitter<IProduct['_id']>();

    onBuyProduct(event: Event) {
        event.stopPropagation();
        this.buyProduct.emit(this.product?._id);
    }

    isStarActive(starIndex: number): boolean {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        return this.product!.rating >= starIndex;
    }
}
