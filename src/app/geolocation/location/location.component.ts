import { Component, OnInit } from '@angular/core';
import { PositionService } from '../service/position.service';
import { iCords } from './../interfaces/cords'

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})

export class LocationComponent implements OnInit {

  public  lat: number;
  public  long: number;
  public  isLoading: boolean = false;
  public  permisionMSG:string;
  public position$;
  constructor( private positionService: PositionService) { }

  ngOnInit() {
    this.position$ = this.positionService.getPositionSub();
    this.position$.subscribe( (position: iCords ) => {
        this.permisionMSG = '';
        this.isLoading = false;
        this.setPosition(position);
      }
    );
  }
  public getPosition(){
    this.isLoading = true;
    this.positionService.getPosition();
  }
  private setPosition( position: iCords ){
    if(position){
      const { longitude, latitude } = position.coords;
      this.lat = longitude;
      this.long = latitude;
    }
  }
}
