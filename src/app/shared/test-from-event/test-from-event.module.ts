import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TestFromEventDirective} from './test-from-event.directive';

@NgModule({
    declarations: [TestFromEventDirective],
    imports: [CommonModule],
    exports: [TestFromEventDirective],
})
export class TestFromEventModule {}
