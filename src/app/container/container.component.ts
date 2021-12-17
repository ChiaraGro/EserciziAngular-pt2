import { map } from 'rxjs/operators';
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
  endpoints: string[] = [];

  ngOnInit(): void {
    this.covidService.getAll().subscribe(data => this.properties = Object.keys(data))
    this.covidService.getAll().subscribe(data => this.endpoints = Object.values(data)
    .map((country: any)=> country.Path))
  }

}
