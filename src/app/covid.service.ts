import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CovidService {

  constructor(private readonly http: HttpClient) { }

  getAll(): Observable<any>{
    return this.http.get('https://api.covid19api.com/')
  }
}
