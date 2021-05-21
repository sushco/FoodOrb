import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../user';


const localUrl ='assets/data/user.json'
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUser(): Observable<User[]>{
    return this.http.get<User[]>
    (localUrl);
  }
}
