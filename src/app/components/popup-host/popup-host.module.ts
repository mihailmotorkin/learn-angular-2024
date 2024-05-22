import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {PopupHostComponent} from './popup-host.component';

@NgModule({
    declarations: [PopupHostComponent],
    imports: [CommonModule, MatDialogModule, MatButtonModule, MatIconModule],
    exports: [PopupHostComponent],
})
export class PopupHostModule {}
