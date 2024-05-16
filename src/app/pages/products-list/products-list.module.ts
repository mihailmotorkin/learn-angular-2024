import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DumpNgIfModule} from 'src/app/shared/dump-ng-if/dump-ng-if.module';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {ScrollWithLoadingModule} from 'src/app/shared/scroll-with-loading/scroll-with-loading.module';
import {TestFromEventModule} from 'src/app/shared/test-from-event/test-from-event.module';
import {PaginationModule} from 'src/app/shared/pagination/pagination.module';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MyAsyncModule} from 'src/app/shared/my-async/my-async.module';
import {ProductsListComponent} from './products-list.component';
import {CardModule} from './card/card/card.module';

@NgModule({
    declarations: [ProductsListComponent],
    imports: [
        CommonModule,
        CardModule,
        DumpNgIfModule,
        MatProgressSpinnerModule,
        ScrollWithLoadingModule,
        TestFromEventModule,
        PaginationModule,
        MatButtonModule,
        MatIconModule,
        MyAsyncModule,
    ],
    exports: [ProductsListComponent],
})
export class ProductsListModule {}
