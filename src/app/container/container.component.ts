import { Component, OnInit } from '@angular/core';
import { CovidService } from '../covid.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  constructor(private covidService: CovidService) { }

  ngOnInit(): void {
    this.covidService.getAll().subscribe(data => console.log(data))
  }

}
