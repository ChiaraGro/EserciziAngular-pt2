import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IBeer } from './models/beer';
import { BEERS } from './models/mock-beers';

@Injectable({
  providedIn: 'root'
})
export class BeerService {
  beers: IBeer[] = BEERS; //da tipizzare?
  beers$ = new BehaviorSubject<IBeer[]>(this.beers);




  constructor() { }

  getBeers(): Observable<IBeer[]>{
    return this.beers$.asObservable();
  }

}
