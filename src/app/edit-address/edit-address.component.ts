import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-address',
  templateUrl: './edit-address.component.html',
  styleUrls: ['./edit-address.component.css']
})
export class EditAddressComponent implements OnInit {

  name:string='';
  address:string='';

  constructor() { }

  ngOnInit(): void {
  }

}
