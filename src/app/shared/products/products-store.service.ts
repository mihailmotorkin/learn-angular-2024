/* eslint-disable prettier/prettier */
import {BehaviorSubject, Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {IProduct} from './product.interface';
import {ProductsApiService} from './products-api.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsStoreService {
    private readonly productsStore$ = new BehaviorSubject<IProduct[] | null>(null);

    constructor(private readonly productsApiService: ProductsApiService) {}

    get products$(): Observable<IProduct[] | null> {
        return this.productsStore$.asObservable();
    }

    loadProducts() {
        this.productsApiService.getProducts$().subscribe(value => {
            this.productsStore$.next(value);
        });
    }
}
