import { CovidService } from './../covid.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  constructor(private covidService: CovidService) { }

  properties: string[] = [];

  ngOnInit(): void {
    this.covidService.getAll().subscribe(data => console.log(data));

    this.covidService.getAll().subscribe(data => this.properties = Object.keys(data) )
  }

}
