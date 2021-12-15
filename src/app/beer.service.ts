import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IBeer } from './models/beer';
import { BEERS } from './models/mock-beers';
import { map } from "rxjs/operators";

// import { find } from 'rxjs/operators';

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

  getById(id: number): Observable <IBeer | undefined>{
    return this.beers$.pipe(
      map((data: IBeer[]) => data.find((beer: IBeer) => beer.id == id))
    )
  }

  selectBeer(name: string, type: string){
    return this.beers$.pipe(
      map((data: IBeer[])=> data.find((beer:IBeer) => beer.name === name && beer.type === type))
    )
  }
  //metodo per il select, seleziono sia per nome che per tipo
}
