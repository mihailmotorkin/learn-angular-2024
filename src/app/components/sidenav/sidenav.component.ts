/* eslint-disable no-console */
import {
    Component,
    ContentChild,
    ElementRef,
    OnInit,
    TemplateRef,
    ViewChild,
    ViewContainerRef,
} from '@angular/core';
import {MatDrawer} from '@angular/material/sidenav';

@Component({
    selector: 'app-sidenav',
    templateUrl: './sidenav.component.html',
    styleUrls: ['./sidenav.component.css'],
})
// implements
//     OnChanges,
//     OnInit,
//     DoCheck,
//     AfterContentInit,
//     AfterContentChecked,
//     AfterViewInit,
//     AfterViewChecked,
//     OnDestroy
export class SidenavComponent implements OnInit {
    // @Input() isSidenavOpened = false;
    // @Output() isSidenavOpenedChange = new EventEmitter<boolean>();
    // @Input() navigationTemplate: TemplateRef<unknown> | null = null;
    // @Input() set navigationTemplate(template: TemplateRef<unknown>) {
    //     this.viewport?.clear();
    //     this.viewport?.createEmbeddedView(template);
    // }

    @ViewChild(MatDrawer, {static: true}) private readonly drawerCommponent?: MatDrawer;
    @ViewChild(MatDrawer, {read: ElementRef, static: false})
    private readonly drawerElement?: ElementRef<HTMLElement>;

    @ViewChild('viewport', {static: true, read: ViewContainerRef})
    private readonly viewport?: ViewContainerRef;

    @ContentChild('navigationTemplate', {static: true})
    private readonly navigationTemplate?: TemplateRef<unknown>;

    ngOnInit() {
        this.insertNavigationTemplate();
    }

    // constructor() {
    //     console.log('constructor', this.isSidenavOpened);
    // }

    toggleSidenavOpened() {
        this.drawerCommponent?.toggle();
        console.log(this.drawerElement?.nativeElement);
        // this.isSidenavOpened = !this.isSidenavOpened;
        // this.isSidenavOpenedChange.emit(!this.isSidenavOpened);
    }

    private insertNavigationTemplate() {
        if (this.navigationTemplate) {
            this.viewport?.createEmbeddedView(this.navigationTemplate);
        }
    }

    // ngOnChanges(isSidenavOpened: SimpleChanges) {
    //     if (isSidenavOpened) {
    //         console.log(
    //             'isSidenavOpened Changed',
    //             isSidenavOpened,
    //             isSidenavOpened['currentValue'],
    //             this.isSidenavOpened,
    //         );
    //     }
    // }

    // ngOnInit() {
    //     console.log('ngOnInit', this.isSidenavOpened);
    //     console.log('ngOnInit - drawerCommponent', this.drawerCommponent);
    //     console.log('ngOnInit - drawerElement', this.drawerElement);
    // }

    // ngDoCheck() {
    //     console.log('ngDoCheck');
    // }

    // ngAfterContentInit() {
    //     console.log('ngAfterContentInit');
    // }

    // ngAfterContentChecked() {
    //     console.log('ngAfterContentChecked');
    // }

    // ngAfterViewInit() {
    //     console.log('ngAfterViewInit');
    //     console.log('ngAfterViewInit - drawerCommponent', this.drawerCommponent);
    //     console.log('ngAfterViewInit - drawerElement', this.drawerElement);
    // }

    // ngAfterViewChecked() {
    //     console.log('ngAfterViewChecked');
    // }

    // ngOnDestroy() {
    //     console.log('ngOnDestroy');
    // }
}
