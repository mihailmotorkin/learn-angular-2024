/* eslint-disable no-console */
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    OnInit,
    ViewChild,
} from '@angular/core';
import {MatDrawer} from '@angular/material/sidenav';
import {CategoriesStoreService} from 'src/app/shared/categories/categories-store.service';

@Component({
    selector: 'app-sidenav',
    templateUrl: './sidenav.component.html',
    styleUrls: ['./sidenav.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidenavComponent implements OnInit {
    readonly categories$ = this.categoriesStoreService.categories$;

    @ViewChild(MatDrawer, {static: true}) private readonly drawerCommponent!: MatDrawer;

    constructor(
        private readonly changeDetectorRef: ChangeDetectorRef,
        private readonly categoriesStoreService: CategoriesStoreService,
    ) {}

    ngOnInit() {
        this.categoriesStoreService.loadCategories();
    }

    toggleSidenavOpened() {
        this.drawerCommponent.toggle();
        this.changeDetectorRef.markForCheck();
    }
}
