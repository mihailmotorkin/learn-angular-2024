/* eslint-disable no-console */
import {Directive, ElementRef, EventEmitter, HostListener, OnDestroy, Output} from '@angular/core';
import {Subscription, filter, fromEvent, map} from 'rxjs';

export type LoadDirection = 'bottom' | 'top' | null;

@Directive({
    selector: '[appTestFromEvent]',
})
export class TestFromEventDirective implements OnDestroy {
    constructor(private readonly element: ElementRef) {
        this.elem = this.element.nativeElement;
    }

    private readonly elem: HTMLElement;
    private readonly borderOffset = 100;
    private initialScrollPositionTop = -1;
    private subscription: Subscription | undefined;

    @Output() loadData = new EventEmitter<LoadDirection>();
    @HostListener('scroll', ['$event.target'])
    onScroll() {
        const scroll$ = fromEvent(this.elem, 'scroll').pipe(
            map((event: Event) => {
                const {scrollHeight, scrollTop, clientHeight} = event.target as HTMLElement;
                const heightCanBeScrolled = scrollHeight - clientHeight;
                const initialScrollPositionTop = this.initialScrollPositionTop;

                this.initialScrollPositionTop = scrollTop;

                if (scrollTop < this.borderOffset && scrollTop < initialScrollPositionTop) {
                    console.log('Load top data');

                    return 'top';
                }

                if (
                    heightCanBeScrolled - scrollTop < this.borderOffset &&
                    scrollTop > initialScrollPositionTop
                ) {
                    console.log('Load bottom data');

                    return 'bottom';
                }

                return null;
            }),
            filter(direction => direction !== null),
        );

        this.subscription = scroll$.subscribe((direction: LoadDirection) =>
            this.loadData.emit(direction),
        );
    }

    ngOnDestroy() {
        this.subscription?.unsubscribe();
    }
}
