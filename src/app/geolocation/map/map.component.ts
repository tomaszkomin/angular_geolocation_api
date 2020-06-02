import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { PositionService } from '../service/position.service';
import { iMapConfig } from '../interfaces/mapConfig';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  @ViewChild('mapContainer', {static: true}) mapContaineRef: ElementRef;

  public map: google.maps.Map;
  private mapConfig: iMapConfig;
  public  position:Position;

  constructor( private positionService: PositionService) { }

  ngOnInit() {

    this.mapConfig = {
      center: new google.maps.LatLng(20, 20),
      zoom: 15,
      mapTypeId: "roadmap"
    };

    this.map = new google.maps.Map(this.mapContaineRef.nativeElement, this.mapConfig);
    console.log("MAP THIS")
    console.log(this);

    this.positionService.getPositionSub().subscribe((position:Position) => {
      this.setMap(position)
    });
  }
  public getData(){
    this.positionService.getPosition();
  }
  public setMap(position:Position){
    console.log(position);
  }
}
