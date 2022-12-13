import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';
import { AppService } from './app.service';
import { InfoComponent } from './component/info/info.component';
import { AboutComponent } from './component/about/about.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
	declarations: [
		AppComponent,
		InfoComponent,
		AboutComponent
	],
	imports: [
		BrowserModule,
		MaterialModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		HttpClientModule,
		MatSnackBarModule
	],
	providers: [
		AppService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
