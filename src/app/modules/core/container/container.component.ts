import { JokeService } from './../../shared/joke.service';
import { Component, OnInit } from '@angular/core';
import { Joke } from 'src/app/models/joke';
import { interval, timer } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  constructor(private jokeService: JokeService) { }

  joke!: Joke;
  likedJokes: Joke[] = [];
  disliked: Joke[]= [];

  ngOnInit(): void {
    this.jokeService.getJoke().subscribe((data: Joke) => this.joke = data)

    // setInterval(() => { this.jokeService.getJoke().subscribe((data: Joke) => this.joke = data)}, 5000);
    //da cambiare con operatore rxjs
  }

  like(){
    this.likedJokes.push(this.joke)
  }

  dislike(){
    this.disliked.push(this.joke)
  }

}
