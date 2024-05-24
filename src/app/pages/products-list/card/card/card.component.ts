/* eslint-disable no-console */
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    EventEmitter,
    Input,
    Output,
} from '@angular/core';
import {getCurrency} from 'src/app/shared/currency/currency';
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

    readonly getCurrency = getCurrency;

    constructor(private readonly changeDetectorRef: ChangeDetectorRef) {
        setInterval(() => {
            this.changeDetectorRef.detectChanges();
        }, 1000);
    }

    onBuyProduct(event: Event) {
        event.stopPropagation();
        console.log(`${this.product?._id} from CardComponent`);
        this.buyProduct.emit(this.product?._id);
    }

    isStarActive(starIndex: number): boolean {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        return this.product!.rating >= starIndex;
    }
}
