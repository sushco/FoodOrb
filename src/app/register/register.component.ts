import { HttpClient } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { AuthService } from '../services/auth.service';
import { RegisterService } from '../services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerUserData = {
    'firstName':'',
    'email':'',
    'password':'',
    'confirmPassword':''
  }
  msg:string;
  model: any ={};

  constructor(private registerService:RegisterService,
              private _router: Router, private http: HttpClient) { }

  ngOnInit() {
  }

  register() {  
       
  sessionStorage.setItem('emailId', this.model.email);
        this._router.navigate(['/home']);     
  }

  onSubmit() {
    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model));
    this.http.post('../assets/data/user',(JSON.stringify(this.model)));
    
   
    
  }
  message(){
    this.msg='Your account has been created.';
    return this.msg;


  }


}