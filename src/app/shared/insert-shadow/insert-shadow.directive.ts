/* eslint-disable no-console */
import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
    selector: '[appInsertShadow]',
})
export class InsertShadowDirective {
    // constructor(private readonly elementRef: ElementRef<HTMLElement>) {
    //     this.elementRef.nativeElement.style.boxShadow = 'inset 0 0 10px #000';
    // }
    // @HostListener('click', ['$event.clientX', '$event.clientY'])
    // onClick(x: number, y: number) {
    //     console.log('Clicked', x, y);
    //     this.boxShadow = !this.boxShadow ? 'inset 0 0 10px #000' : '';
    // }
    // @HostBinding('style.boxShadow')
    // boxShadow = '';
    @HostListener('click')
    toggleBoxShadow() {
        this.isBoxShadowActive = !this.isBoxShadowActive;
    }

    @HostBinding('style.boxShadow')
    get boxShadow(): string {
        return this.isBoxShadowActive ? 'inset 0 0 10px #000' : '';
    }

    private isBoxShadowActive = false;
}
