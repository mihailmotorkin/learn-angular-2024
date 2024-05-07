import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DumpNgIfModule} from 'src/app/shared/dump-ng-if/dump-ng-if.module';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {ProductsListComponent} from './products-list.component';
import {CardModule} from './card/card/card.module';

@NgModule({
    declarations: [ProductsListComponent],
    imports: [CommonModule, CardModule, DumpNgIfModule, MatProgressSpinnerModule],
    exports: [ProductsListComponent],
})
export class ProductsListModule {}
