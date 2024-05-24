/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/naming-convention */

import {ISubCategory} from './sub-category.interface';

export interface ICategory {
    _id: string;
    name: string;
    subCategories: ISubCategory[];
}