import { Component, OnInit } from '@angular/core';
import { PositionService } from '../service/position.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  public position:Position;
  constructor( private positionService: PositionService) { }

  ngOnInit() {
    this.positionService.getPositionSub().subscribe((data:Position) => {
      console.log("DATA RECIVED FROM MAP ");
      console.log(data);
    });
  }
  public getData(){
    this.positionService.getPosition();
  }
  public setMap(){

  }
}
