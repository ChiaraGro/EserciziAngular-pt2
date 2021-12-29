import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { Joke } from 'src/app/models/joke';
import { environment } from 'src/environments/environment';
import { map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class JokeService {
  constructor(private readonly http: HttpClient) {}

  getJoke(): Observable<Joke> {
    return timer(1, 5000).pipe(
      switchMap(() => this.http.get<any>(environment.apiUrl)),
      map((response) => response.joke)
    );
  }
}
