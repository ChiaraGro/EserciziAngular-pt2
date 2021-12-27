import { Joke } from './../../../models/joke';
import { JokeService } from './../../shared/joke.service';
import { Component, OnInit } from '@angular/core';
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

  goodJoke!: Joke;
  badJoke!: Joke;

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

  notLike(goodJoke: Joke){
    this.disliked.push(goodJoke);

    const index = this.likedJokes.indexOf(goodJoke);
    this.likedJokes.splice(index, 1)
  }

  notDislike(badJoke: Joke){
    this.likedJokes.push(badJoke);

    const index = this.disliked.indexOf(badJoke);
    this.disliked.splice(index, 1);
  }
}
