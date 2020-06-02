import { Component, OnInit } from '@angular/core';

import { MatButton } from '@angular/material';
import { MatIcon } from '@angular/material';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-geolocation',
  templateUrl: './geolocation.component.html',
  styleUrls: ['./geolocation.component.scss']
})
export class GeolocationComponent implements OnInit {

  private position: Position;
  public position$ =  new Subject<Position>();

  public  lat: number;
  public  long: number;
  public  isLoading: boolean = false;
  public  permisionMSG:string;
  constructor() { }

  ngOnInit() {}
  public getPosition(){
      this.isLoading = true;
      navigator.geolocation.getCurrentPosition(
        ( position ) => {
          const {longitude, latitude} = position.coords;

          this.lat = longitude;
          this.long = latitude;
          this.permisionMSG = '';
          this.isLoading = false;
          this.position = position;
          this.position$.next(position);
          console.log(this.position$);
          return position;
        } , ( error ) => {
          this.permisionMSG = error.message;
          this.isLoading = false;
          return error;
        }
      );
  }
}
