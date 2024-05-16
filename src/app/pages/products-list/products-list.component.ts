/* eslint-disable no-console */
import {ChangeDetectionStrategy, ChangeDetectorRef, Component} from '@angular/core';
import {Observable, of} from 'rxjs';
import {IProduct} from 'src/app/shared/products/product.interface';
import {productsMock} from 'src/app/shared/products/product.mock';
import {LoadDirection} from 'src/app/shared/scroll-with-loading/scroll-with-loading.directive';
// import {LoadDirection} from 'src/app/shared/test-from-event/test-from-event.directive';

@Component({
    selector: 'app-products-list',
    templateUrl: './products-list.component.html',
    styleUrls: ['./products-list.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsListComponent {
    // products: IProduct[] | null = null;
    products$: Observable<IProduct[]> = of(productsMock);

    constructor(private readonly changeDetectorRef: ChangeDetectorRef) {}

    // ngOnInit(): void {
    // this.changeDetectorRef.detach();
    // this.changeDetectorRef.detectChanges();
    // setTimeout(() => {
    //     this.products = productsMock;
    //     // this.changeDetectorRef.markForCheck();
    //     this.changeDetectorRef.detectChanges();
    //     console.log('detectChanges - 3');
    //     this.changeDetectorRef.reattach();
    // }, 3000);
    // setTimeout(() => {
    //     this.products = [...productsMock.map(product => ({...product, feedbacksCount: 1}))];
    //     this.changeDetectorRef.markForCheck();
    //     console.log('markForCheck - 5');
    //     // this.changeDetectorRef.detectChanges();
    // }, 5000);
    // }

    // ngDoCheck(): void {
    //     console.log('ngDoCheck');
    // }

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
