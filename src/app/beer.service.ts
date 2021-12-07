import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IBeer } from './models/beer';
import { BEERS } from './models/mock-beers';

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

  selectById(id: number){
    return this.beers.find(beer => beer.id == id) as IBeer;
  }
  //lo riconosce da sè come observable??


  //usare il next? o altre cose di rxjs????
  //il find esiste ma non funziona


  // selectById(id: number){
  //     return this.beers()
  //     .map((beer: IBeer[]) => beer.filter((beer: { id: number; }) => beer.id === id));

  // }

}
