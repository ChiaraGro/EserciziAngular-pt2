import { BeerService } from './../beer.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  constructor(public beerService: BeerService) { }

  ngOnInit(): void {
  }

}
