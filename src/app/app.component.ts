import { Component } from '@angular/core';
import { CurrencyapidataService } from './currencyapidata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'test-1-angular-currencycalc';
  currjson: any = [];

  base = 'USD';
  cont2 = 'USD';
  result: string = '1';

  changebase(a: string) {
    this.base = a;
    console.log(this.base);
  }

  tocountry(b: string) {
    this.cont2 = b;
    console.log(this.cont2);
  }

  constructor(private currency: CurrencyapidataService) {}
  convert() {
    this.currency.getcurrencydata(this.base).subscribe((data) => {
      console.log(data);
      this.currjson = JSON.stringify(data);
      /* console.log(this.currjson); */
      this.currjson = JSON.parse(this.currjson);

      if (this.cont2 == 'USD') {
        this.result = this.currjson.rates.USD;
      }

      if (this.cont2 == 'EUR') {
        this.result = this.currjson.rates.EUR;
      }

      if (this.cont2 == 'UAH') {
        this.result = this.currjson.rates.UAH;
      }
    });
  }
}
