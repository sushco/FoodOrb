import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.css']
})
export class ListCardComponent implements OnInit {

  isCard = false;
  cardList: Array<any> = [];
  cardName = '';
  cardNo = '';
  expiryYear = '2022';
  expiryMonth = 'Jan';
  monthsDropdown =[
    {Id: 1 ,Description: 'Jan' },
    {Id: 2 ,Description: 'Feb' },
    {Id: 3 ,Description: 'Mar' },
    {Id: 4 ,Description: 'Apr' },
    {Id: 5 ,Description: 'May' },
    {Id: 6 ,Description: 'Jun' },
    {Id: 7 ,Description: 'Jul' },
    {Id: 8 ,Description: 'Aug' },
    {Id: 9 ,Description: 'Sep' },
    {Id: 10 ,Description: 'Oct' },
    {Id: 11 ,Description: 'Nov' },
    {Id: 12 ,Description: 'Dec' }
]
yearsDropdown =[
  {Id: 1 ,Year: 2022 },
  {Id: 2 ,Year: 2023 },
  {Id: 3 ,Year: 2024 },
  {Id: 4 ,Year: 2025 },
  {Id: 5 ,Year: 2026 },

]
  constructor() { }

  ngOnInit(): void {
  }

  AddCard(): void{
    this.cardNo = '';
    this.cardName = '';
    this.isCard = true;
  }

  newCard(): void{
    this.cardList.push({cardName: this.cardName, cardNo : this.cardNo ,expiryMonth: this.expiryMonth , expiryYear: this.expiryYear});
    this.isCard = false;
  }


}
