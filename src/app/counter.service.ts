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
      console.log(this.counter);
    } else{
      this.counter = 0; //riporto il counter a 0
      console.log ('Errore');
    }
  }

  add(){
    console.log (this.counter += this.value);
  }

  sub(){
    console.log (this.counter -= this.value);
  }
}
