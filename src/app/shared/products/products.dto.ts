/* eslint-disable prettier/prettier */
import {IProduct} from './product.interface';

export interface IProductsDto {
    data: {
        items: IProduct[];
    };
}