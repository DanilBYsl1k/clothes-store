import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetCardsService {

  baseUrl='https://database-634d4-default-rtdb.europe-west1.firebasedatabase.app/catalog/.json'
  constructor(private http:HttpClient) { }
  getCards(){
    return this.http.get(this.baseUrl).pipe()
  }
}
