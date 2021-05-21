import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Food} from '../list-food/food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {


  // allItems: Food[];
  // baseUrl: string ='http://localhost:3000/foodItems';

  constructor(private httpClient: HttpClient) {} 
    
    getAllItems(): Observable<Food[]>{
      return this.httpClient.get<Food[]>('assets/data/food.json');

    }

    getItem(id: number){
     return this.httpClient.get<Food>('assets/data/food.json')
    }


  }

