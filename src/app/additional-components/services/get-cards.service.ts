import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Icard } from '../types/Cards.interface';

@Injectable({
  providedIn: 'root'
})
export class GetCardsService {

  baseUrl='https://database-634d4-default-rtdb.europe-west1.firebasedatabase.app/catalog/.json'
  constructor(private http:HttpClient) { }
  getCards():Observable<Icard[]>{
    return this.http.get<Icard[]>(this.baseUrl)
  }
}
