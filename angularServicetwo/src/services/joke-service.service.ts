import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class JokeServiceService {
  http: HttpClient;
  constructor(http: HttpClient) {
    this.http = http;
  }
  getJokecategory() {
    return this.http.get('https://api.chucknorris.io/jokes/categories');
  }
}
