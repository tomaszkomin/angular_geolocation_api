import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GeolocationModule } from './geolocation/geolocation.module';
import { GeolocationComponent } from './geolocation/geolocation.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    GeolocationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
