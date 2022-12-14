import { Component, HostListener, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import * as p5 from 'p5';
import { AppService } from './app.service';
import { AboutComponent } from './component/about/about.component';
import { InfoComponent } from './component/info/info.component';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	placesToggle: boolean = true;
	citiesToggle: boolean = true;
	zoom: number = 100;
	coordinates: any;
	constructor(private service: AppService, private dialog: MatDialog, private snackbar: MatSnackBar) { }

	ngOnInit(): void {
		this.service.getCoordinates().subscribe({
			next: (data) => {
				this.coordinates = data;
				this.coordinates = this.coordinates.sort((a: any, b: any) => { return a.name.localeCompare(b.name) });
			}
		})
		this.openHint();
	}
	zoomIn() {
		this.zoom += 25;
	}
	zoomOut() {
		if (this.zoom === 100) return;
		else this.zoom -= 25;
	}
	getPlace(place: any) {
		this.dialog.open(InfoComponent, {
			width: '80vw',
			height: 'auto',
			maxWidth: '1020px',
			data: place,
		})
	}
	openAbout() {
		this.dialog.open(AboutComponent, {
			width: '80vw',
			height: 'auto',
			maxWidth: '1020px',
		})
	}
	openHint() {
		this.snackbar.open('Click on any of the cities, towns or landmarks to view more information about the location. You can also use the filter toggles at the top to hide/show the locations.', 'OK', {
			horizontalPosition: 'right',
			panelClass: 'snack'
		})
	}
}
