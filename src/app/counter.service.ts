import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  private counter : number = 0;

  constructor() { }

  getValue(){
    if(this.counter >= 0){
      return this.counter;
    } else{
      return 'Errore';
    }
  }

  add(){
  }
}
