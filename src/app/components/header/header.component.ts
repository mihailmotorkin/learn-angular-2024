/* eslint-disable no-console */
import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IApplicationConfig} from 'src/app/shared/application-config/application-config.interface';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
    @Input() applicationConfig: IApplicationConfig | null = null;
    // readonly title = 'Angular-learnjs';
    // readonly faviconSrc = '../../../favicon.ico';
    @Output() readonly menuClick = new EventEmitter<Event>();

    onMenuClick(event: Event) {
        console.log('Menu click!');
        // this.menuClick.next(event);
        this.menuClick.emit(event);
    }

    onShareClick(event: Event) {
        event.stopPropagation();
        console.log('Share click!');
    }
}
