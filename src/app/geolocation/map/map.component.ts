import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { PositionService } from '../service/position.service';
import { iMapConfig } from '../interfaces/mapConfig';
import { MapMarker } from '@angular/google-maps';
const DEFAULT_ZOOM = 14;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  private _zoom = DEFAULT_ZOOM;
  private _options: google.maps.MapOptions = {
    zoomControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    mapTypeId: 'hybrid',
  }
  public  center : google.maps.LatLngLiteral;
  public  marker: any;
  public  position: Position;
  public  isLoading: boolean = false;

  constructor(private positionService: PositionService) { }

  ngOnInit(){
    this.center = { lat: 0, lng: 0 }
  }
  ngAfterViewInit() {
    this.positionService.getPositionSub().subscribe((position:Position) => {
      if(position){
        this.setMap(position)
        this.addMarker(position);
      };
    });
  }
  public getData(){
    this.positionService.getPosition();
  }
  public setMap( position: Position ){
    const { latitude, longitude } = position.coords;
    this.center = {
      lat: latitude,
      lng: longitude
    }
  }
  public addMarker( position: Position ) {
    const { latitude, longitude } = position.coords;
    this.marker = {
      position: {
        lat: latitude,
        lng: longitude
      },
      label: {
        color: 'blue',
        text: 'Your Here',
      },
      title: 'I Find you here',
      options: { animation: google.maps.Animation.BOUNCE },
    }
  }
}
