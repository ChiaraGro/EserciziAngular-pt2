import { JokeService } from './../../shared/joke.service';
import { Component, OnInit } from '@angular/core';
import { Joke } from 'src/app/models/joke';
import { interval } from 'rxjs';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  constructor(private jokeService: JokeService) { }

  // joke!: any;
  // likedJokes: any[] = [];
  // disliked: any[]= [];

  joke!: Joke;
  likedJokes: Joke[] = [];
  disliked: Joke[]= [];

  ngOnInit(): void {
    this.jokeService.getJoke().subscribe((data: Joke) => this.joke = data)
  }





  like(){
    this.likedJokes.push(this.joke)
  }

  // dislike(){
  //   this.disliked.push(this.joke.joke)
  // }

}
