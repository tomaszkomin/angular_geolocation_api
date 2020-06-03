import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PositionService {
  public position$ =  new BehaviorSubject<Position>(null);
  constructor() { }
  public getPositionSub() :BehaviorSubject<Position> {
    return this.position$;
  }
  public getPosition(){
    navigator.geolocation.getCurrentPosition(
      ( position ) => {
        this.position$.next(position);
      }
      ,( error ) => {
        console.log(error.message);
      }
    );
  };
}
