import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'

import { GeolocationComponent } from './geolocation.component';
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [
    GeolocationComponent
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
