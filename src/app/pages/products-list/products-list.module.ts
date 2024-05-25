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
import {FilterByPropertyModule} from 'src/app/shared/filter-by-property/filter-by-property.module';
import {RouterModule} from '@angular/router';
import {CounterInputModule} from 'src/app/shared/counter-input/counter-input.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {IsStringValidatorModule} from 'src/app/shared/test-validators/directives/is-string-validator/is-string-validator.module';
import {IsStringAsyncValidatorModule} from 'src/app/shared/test-validators/directives/is-string-async-validator/is-string-async-validator.module';
import {ProductsListComponent} from './products-list.component';
import {CardModule} from './card/card/card.module';
import {ProductsListRoutingModule} from './products-list-routing.module';

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
        FilterByPropertyModule,
        RouterModule,
        ProductsListRoutingModule,
        CounterInputModule,
        ReactiveFormsModule,
        FormsModule,
        MatInputModule,
        IsStringValidatorModule,
        IsStringAsyncValidatorModule,
    ],
    providers: [],
    exports: [ProductsListComponent],
})
export class ProductsListModule {}
