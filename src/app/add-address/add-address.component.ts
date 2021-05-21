import { Component, OnInit } from '@angular/core';
import { Address } from '../list-address/address';

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.css']
})
export class AddAddressComponent implements OnInit {

  isAddress = false;
  addressList: Array<any> = [];
  name = '';
  address = '';
  constructor() { }

  ngOnInit(): void {
  }

  AddAddress(): void{
    this.address = '';
    this.name = '';
    this.isAddress = true;
  }

  newAddress(): void{
    this.addressList.push({name: this.name, address : this.address});
    this.isAddress = false;
  }
}
