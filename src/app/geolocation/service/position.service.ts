import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PositionService {
  public position$ =  new Subject<Position>();
  constructor() { }

  getPosition(){
    navigator.geolocation.getCurrentPosition(
      ( position ) => {
        const {longitude, latitude} = position.coords;
        this.position$.next(position);
        return this.position$;
      }
      ,( error ) => {
        console.log(error.message);
      }
    );
  };
}
