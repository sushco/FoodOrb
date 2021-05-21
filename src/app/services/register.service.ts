import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  rootUrl="assets/data/user"
  
  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<User[]>{
    return this.http.get<User[]>('assets/data/user.json');

  }

  
  registerUser(user: User){
    return this.http.post<User[]>('assets/data/user.json', user );
  }
//  registerUser(data){
//     return this.http.post(this.rootUrl+'users',data)
//   }
 
}
