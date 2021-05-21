import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  allUsers: any;
  details: any;
  id: number;
  emailid: string;
  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    const emailId = sessionStorage.getItem('emailId');
  
      this.id = 1; 
      this.emailid =emailId;
    

  }

}
