import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';


@NgModule({
    exports: [
        MatCheckboxModule,
        MatButtonModule,
        MatSlideToggleModule,
        MatIconModule,
        DragDropModule,
        MatDialogModule,
        MatDividerModule
    ]
})
export class MaterialModule { }