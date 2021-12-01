import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  private counter : number = 0;
  value : number= 1;

  constructor() { }

  getValue(){
    if(this.counter >= 0){
      return this.counter;
    } else{
      this.counter = 0; //riporto il counter a 0
      return 'Errore';
    }
  }

  add(){
    return this.counter += this.value;
  }

  sub(){
    return this.counter -= this.value;
  }
}
