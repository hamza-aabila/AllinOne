import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.page.html',
  styleUrls: ['./currency.page.scss'],
})
export class CurrencyPage implements OnInit {

  amount:number;
  currency:string = "";
  result:number;

  constructor() { }

  ngOnInit() {
  }

  convert() {
    if(this.amount == null && this.amount < 0){
      alert("Entre the amount");
      return;
    }
    if (this.currency === "mad") {
      this.result = this.amount*0.1;
    return;
    }else if (this.currency === "usd") {
      this.result = this.amount*10;
    return;
    }
  }

}
