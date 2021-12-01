import { Component, OnInit } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-show-counter',
  templateUrl: './show-counter.component.html',
  styleUrls: ['./show-counter.component.css']
})
export class ShowCounterComponent implements OnInit {

  constructor(public counterService: CounterService) {
  }

  counter = this.counterService.getValue();

  ngOnInit(): void {

  }

}
