import { IBeer } from './../models/beer';
import { BeerService } from './../beer.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  beers!: IBeer[];

  name!: string;
  type!: string;
  selectedBeer!: IBeer | undefined;

  constructor(private beerService: BeerService) { }

  ngOnInit(): void {
    this.beerService.getBeers().subscribe((data: IBeer[]) => this.beers = data);
    //prendo tutte le birre
  }

  selectBeer(name: string, type: string){
    this.beerService.selectBeer(name, type).subscribe((data)=> this.selectedBeer = data)
  }

}
