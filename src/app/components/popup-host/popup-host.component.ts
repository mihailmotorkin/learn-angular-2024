/* eslint-disable no-console */
import {
    OnChanges,
    Component,
    // AfterViewInit,
    Input,
    TemplateRef,
    ViewChild,
    ViewContainerRef,
    SimpleChanges,
} from '@angular/core';
// import {MatDialog} from '@angular/material/dialog';

@Component({
    selector: 'app-popup-host',
    templateUrl: './popup-host.component.html',
    styleUrls: ['./popup-host.component.css'],
})

// <---   Вариант решения от лектора  --->
export class PopupHostComponent implements OnChanges {
    @Input() template: TemplateRef<unknown> | null = null;

    @ViewChild('viewport', {read: ViewContainerRef, static: true})
    private readonly viewportViewContainer!: ViewContainerRef;

    ngOnChanges(template: SimpleChanges) {
        if (template) {
            this.updatePopup(this.template);
        }
    }

    private updatePopup(template: TemplateRef<unknown> | null) {
        this.viewportViewContainer.clear();

        if (template) {
            this.viewportViewContainer.createEmbeddedView(template);
        }
    }

    // <---  Вариант решения через методы Material  --->
    // export class PopupHostComponent implements OnChanges {
    //     constructor(public dialog: MatDialog) {}

    //     @Input() template: TemplateRef<unknown> | null = null;

    //     ngOnChanges() {
    //         this.dialog.closeAll();

    //         if (this.template) {
    //             this.dialog.open(this.template);
    //         }
    //     }

    // <---  Вариант решения через "ngTemplateOutlet"  --->
    // export class PopupHostComponent implements AfterViewInit {
    //     constructor(public dialog: MatDialog) {}

    //     @ViewChild('template') template!: TemplateRef<unknown>;

    //     ngAfterViewInit() {
    //         this.dialog.closeAll();

    //         if (this.template) {
    //             this.dialog.open(this.template);
    //         }
    //     }
}
