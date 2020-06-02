import { Component, OnInit } from '@angular/core';

import { MatButton } from '@angular/material';
import { MatIcon } from '@angular/material';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {

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
          this.permisionMSG = '';
          this.isLoading = false;

          const { longitude, latitude } = position.coords;
          this.lat = longitude;
          this.long = latitude;
          this.position = position;
          this.position$.next(this.position);

          console.log(this.position);
          console.log(this.lat);
          console.log(this.position$);
        }
        ,( error ) => {
          this.permisionMSG = error.message;
          this.isLoading = false;
        }
      );
  }
}
