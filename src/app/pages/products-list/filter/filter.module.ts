import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {CounterInputModule} from 'src/app/shared/counter-input/counter-input.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {FilterComponent} from './filter.component';

@NgModule({
    declarations: [FilterComponent],
    imports: [
        CommonModule,
        MatInputModule,
        MatCheckboxModule,
        MatProgressSpinnerModule,
        CounterInputModule,
        ReactiveFormsModule,
        FormsModule,
    ],
    exports: [FilterComponent],
})
export class FilterModule {}
