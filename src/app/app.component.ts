/* eslint-disable no-console */
import {ApplicationRef, ChangeDetectionStrategy, Component} from '@angular/core';
import {applicationConfigMock} from './shared/application-config/application-config.mock';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
    readonly applicationConfig = applicationConfigMock;
    switchTemplate: boolean | null = true;

    constructor(private readonly applicationRef: ApplicationRef) {
        // this.applicationRef.tick();
    }

    // ngDoCheck(): void {
    //     console.log('AppComponent ChangeDetection');
    // }

    // constructor() {
    //     setTimeout(() => {
    //         this.switchTemplate = !this.switchTemplate;
    //     }, 3000);
    //     setTimeout(() => {
    //         this.switchTemplate = !this.switchTemplate;
    //     }, 6000);
    //     setTimeout(() => {
    //         this.switchTemplate = !this.switchTemplate;
    //     }, 9000);
    // }

    isSidenavOpenedFromApp = false;

    onMenuClick(event: Event) {
        console.log('click from AppComponent', event);

        this.isSidenavOpenedFromApp = !this.isSidenavOpenedFromApp;
    }
}
