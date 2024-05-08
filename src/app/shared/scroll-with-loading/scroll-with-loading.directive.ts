/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable no-use-before-define */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable no-console */
import {Directive, EventEmitter, HostListener, Output} from '@angular/core';

@Directive({
    selector: '[appScrollWithLoading]',
})
export class ScrollWithLoadingDirective {
    borderOffset = 100;
    initialScrollPositionTop = -1;

    @Output() loadData = new EventEmitter<LoadDirection>();
    @HostListener('scroll', ['$event.target'])
    onScroll({scrollHeight, scrollTop, clientHeight}: HTMLElement) {
        const heightCanBeScrolled = scrollHeight - clientHeight;
        const initialScrollPositionTop = this.initialScrollPositionTop;

        this.initialScrollPositionTop = scrollTop;

        const isScrollReachedBottomOffset = (
            scrollTop: number,
            heightCanBeScrolled: number,
            initialScrollPositionTop: number,
        ): boolean => {
            return (
                heightCanBeScrolled - scrollTop < this.borderOffset &&
                scrollTop > initialScrollPositionTop
            );
        };

        const isScrollReachedTopOffset = (
            scrollTop: number,
            initialScrollPositionTop: number,
        ): boolean => {
            return scrollTop < this.borderOffset && scrollTop < initialScrollPositionTop;
        };

        const loadDataBottom = isScrollReachedBottomOffset(
            scrollTop,
            heightCanBeScrolled,
            initialScrollPositionTop,
        );

        const loadDataTop = isScrollReachedTopOffset(scrollTop, initialScrollPositionTop);

        if (loadDataBottom) {
            console.log('Load bottom data');
            this.loadData.emit(LoadDirection.Bottom);

            return;
        }

        if (loadDataTop) {
            console.log('Load top data');
            this.loadData.emit(LoadDirection.Top);
        }
    }
}

export enum LoadDirection {
    Top = 'top',
    Bottom = 'bottom',
}
