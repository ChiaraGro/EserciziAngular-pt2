import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Joke } from 'src/app/models/joke';
import { environment } from 'src/environments/environment';
import { map  } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class JokeService {

  constructor(private http: HttpClient) { }

  getJoke():Observable<Joke>{
    return this.http.get<any>(environment.apiUrl).pipe(
      map(response =>response.joke))
}
}
