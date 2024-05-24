import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NotFoundComponent} from './pages/not-found/not-found.component';
import {ProductsResolver} from './shared/products/products.resolver';
// import {questionCanLoadGuard} from './shared/test-guards/question-can-load.guard';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/products-list',
    },
    {
        path: 'products-list',
        // children: productsListRoutes,
        loadChildren: () =>
            import('./pages/products-list/products-list.module').then(m => m.ProductsListModule),
        // canLoad: [questionCanLoadGuard],
        resolve: {
            products: ProductsResolver,
        },
    },
    {
        path: 'product/:id',
        // children: productRoutes,
        loadChildren: () => import('./pages/product/product.module').then(m => m.ProductModule),
    },
    {
        path: '**',
        component: NotFoundComponent,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
