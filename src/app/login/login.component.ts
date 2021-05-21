import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUserData = {
    'email': '',
    'password': ''
  }

  allUsers:Array<any> =[];


  constructor(private _auth: AuthService, private userService: UserService,
    private _router: Router) { }

  ngOnInit() {
    sessionStorage.clear();
    this.userService.getUser().subscribe((response) => {
      this.allUsers = response;
      // this.details = this.allUsers.find(x => x.email === emailId);
      // this.id = this.details.id;
      // this.emailid = this.details.email;
    });
  }

  loginUser(): void {
    // const user = this.allUsers.find(x => x.email === this.loginUserData.email && x.password === this.loginUserData.password);
    // if(user){
    sessionStorage.setItem('emailId', this.loginUserData.email);
    this._router.navigate(['/home']);
    // }else{
    //   if(window.confirm('Invalid username/password')){

    //   }
    //  }
    // this._auth.loginUser(this.loginUserData)
    // .subscribe(
    //   res => {
    //     sessionStorage.setItem('emailId', this.loginUserData.email);
    //     localStorage.setItem('token', res.token);
    //     this._router.navigate(['/home'])
    //   },
    //   err => console.log(err)
    // )
  }

}
