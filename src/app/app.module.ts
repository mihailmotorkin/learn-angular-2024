import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatListModule} from '@angular/material/list';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderModule} from './components/header/header.module';
import {ProductsListModule} from './pages/products-list/products-list.module';
import {SidenavModule} from './components/sidenav/sidenav.module';
import {PopupHostModule} from './components/popup-host/popup-host.module';
import {InsertShadowModule} from './shared/insert-shadow/insert-shadow.module';
import {ProductsStoreService} from './shared/products/products-store.service';

@NgModule({
    declarations: [AppComponent],
    providers: [
        ProductsStoreService,
        // {
        //     provide: 'ProductsStoreService',
        //     useExisting: ProductsStoreService,
        // },
        // {
        //     provide: 'userName',
        //     useValue: 'Egor',
        // },
        {
            provide: 'userAge',
            useValue: 0,
        },
        {
            provide: 'userName',
            useFactory: () => 'Egor',
        },
        {
            provide: 'products',
            useFactory: (productsStoreService: ProductsStoreService) =>
                productsStoreService.products$,
            deps: [ProductsStoreService],
        },
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HeaderModule,
        ProductsListModule,
        SidenavModule,
        PopupHostModule,
        MatListModule,
        InsertShadowModule,
    ],
})
export class AppModule {}
