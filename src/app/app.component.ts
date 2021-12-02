import { Component } from '@angular/core';
import { CounterService } from './counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EserciziAngularPt2';

  constructor(private counterService: CounterService){
  }

  counter = this.counterService.getValue();
}
