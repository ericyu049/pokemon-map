import { Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
    selector: 'info-comp',
    templateUrl: './info.component.html',
    styleUrls: ['./info.component.scss']
})
export class InfoComponent {
    constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
        
    }
}