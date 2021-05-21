import { Component, OnInit } from '@angular/core';
import { TimerService } from '../services/timer.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  trackMessage = '';
  timer1 = '';
  timer2 = '';
  emailId = sessionStorage.getItem('emailId')
  constructor(private timerService: TimerService) { }

  ngOnInit(): void {
  }

  TrackEvent(): void{
    const timer = this.timerService.fetchDisplay();
    this.timer1 = '0:15:00';
    this.timer2 = '0:30:00';
    if (this.timer1 >= timer) {
      this.trackMessage = 'Your order is being prepared';
    }
    else if (this.timer1 < timer && timer < this.timer2){
      this.trackMessage = 'Your order is on its way';
    }
    else if (timer >= this.timer2){
      this.trackMessage = 'Your order has been delivered';
    }
    else{
      this.trackMessage = 'Your order is being prepared';
    }
  }

}
