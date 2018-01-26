import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgxMasonryModule } from 'ngx-masonry';

import { AppComponent } from './app.component';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		NgxMasonryModule
	],
	providers: [],
	bootstrap: [
		AppComponent
	]
})
export class AppModule {}
