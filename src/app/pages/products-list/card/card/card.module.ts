import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {CarouselModule} from 'src/app/shared/carousel/carousel.module';
// import {CurrencyModule} from 'src/app/shared/currency/currency.module';
import {CardComponent} from './card.component';

@NgModule({
    declarations: [CardComponent],
    imports: [
        CommonModule,
        MatCardModule,
        MatButtonModule,
        MatIconModule,
        CarouselModule,
        // CurrencyModule,
    ],
    exports: [CardComponent],
})
export class CardModule {}
