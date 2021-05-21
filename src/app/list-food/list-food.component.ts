import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food.service';
import { Food } from './food';
import { TimerService } from '../services/timer.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list-food',
  templateUrl: './list-food.component.html',
  styleUrls: ['./list-food.component.css'],
})
export class ListFoodComponent implements OnInit {
  cartItems: Food[] = [];
  total = 0;
  allItems: Food[];
  msg: string;
  isTrackOrder = false;
  Message = 'Your order is being prepared';
  timer1 = '';
  timer2 = '';
  filtertext = '';
  emailId = sessionStorage.getItem('emailId');

  constructor(
    private foodService: FoodService,
    private timerService: TimerService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.foodService.getAllItems().subscribe((response) => {
      this.allItems = response;
    });
  }

  addToCart(foodItem: Food): void {
    if (window.confirm('Are you sure you want to add this item to cart ?')) {
    this.cartItems.push(foodItem);
    this.total = this.total + foodItem.foodCost;
    }
    else{
    }
  }

  getAllItems(): void {}

  getItem(id: number): void {}

  startTimer(): void {
    this.timerService.startTimer();
  }

  removeFromCart(id: number): void {
    for (let i = 0; i < this.cartItems.length; i++) {
      if (this.cartItems[i].id === id) {
        this.total = this.total - this.cartItems[i].foodCost;
        this.cartItems.splice(i, 1);
        break;
      }
    }
    if (this.cartItems.length === 0){
      this.isTrackOrder = false;
    }

  }
  clickEvent(): string {
    this.isTrackOrder = true;
    this.msg =
      'Thank you for placing your order. You can track your order in real time while you wait for your food.';
    return this.msg;
  }

  TrackEvent(): void{
    const timer = this.timerService.fetchDisplay();
    this.timer1 = '0:15:00';
    this.timer2 = '0:30:00';
    if (this.timer1 >= timer) {
      this.Message = 'Your order is being prepared';
    }
    else if (this.timer1 < timer && timer < this.timer2){
      this.Message = 'Your order is on its way';
    }
    else if (timer >= this.timer2){
      this.Message = 'Your order has been delivered';
    }
    else{
      this.Message = 'Your order is being prepared';
    }    
  }


}
