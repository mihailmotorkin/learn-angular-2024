/* eslint-disable no-console */
import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'currency',
    pure: false,
})
export class CurrencyPipe implements PipeTransform {
    transform(price: number | undefined): string {
        console.log('CurrencyPipe transform');

        return `${Number(price) || '-'} $`;
    }
}
