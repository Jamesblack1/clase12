import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HarryService {

  constructor(private http: HttpClient) { }

  url = "http://hp-api.herokuapp.com/api/characters/house/gryffindor";

  getDataHarry(){
    return this.http.get(this.url);
  }
}
