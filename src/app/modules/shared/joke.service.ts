import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JokeService {

  constructor(private http: HttpClient) { }

  getJoke(){
    return this.http.get(environment.apiUrl)
  }
}
