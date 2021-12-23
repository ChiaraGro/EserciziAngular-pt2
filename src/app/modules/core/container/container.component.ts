import { JokeService } from './../../shared/joke.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  constructor(private jokeService: JokeService) { }

  ngOnInit(): void {
    console.log(this.jokeService.getJoke().subscribe());
  }

}
