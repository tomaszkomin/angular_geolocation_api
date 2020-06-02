import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'

import { GeolocationComponent } from './geolocation.component';
import { MaterialModule } from './material/material.module';
import { MapComponent } from './map/map.component';
import { LocationComponent } from './location/location.component';

@NgModule({
  declarations: [
    GeolocationComponent,
    MapComponent,
    LocationComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    GeolocationComponent
  ]
})
export class GeolocationModule { }
