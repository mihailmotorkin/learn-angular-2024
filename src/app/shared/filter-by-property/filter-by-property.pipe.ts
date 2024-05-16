import {Pipe, PipeTransform} from '@angular/core';
import {IProduct} from '../products/product.interface';

@Pipe({
    name: 'filterByProperty',
})
export class FilterByPropertyPipe<T extends IProduct> implements PipeTransform {
    transform(products: T[] | undefined | null, searchName: string): T[] | undefined | null {
        if (!products?.length) {
            return products;
        }

        searchName = searchName.toUpperCase();

        return products.filter(product => product.name.toUpperCase().includes(searchName));
    }
}
