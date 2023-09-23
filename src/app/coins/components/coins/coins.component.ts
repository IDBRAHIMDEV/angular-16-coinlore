import { Ticker } from '../../models/tickers';
import { CoinsService } from './../../services/coins.service';
import { Component, OnInit, inject, signal } from '@angular/core';

@Component({
  selector: 'app-coins',
  templateUrl: './coins.component.html',
  styleUrls: ['./coins.component.css'],
})
export class CoinsComponent implements OnInit {
  coinsService = inject(CoinsService);

  tickers = signal<Ticker[]>([]);

  ngOnInit(): void {
    this.getAllCoins();
  }

  getAllCoins() {
    this.coinsService._getAllCoins().subscribe({
      next: ({ data }) => {
        console.log(data);
        this.tickers.set(data);
      },
    });
  }

  currencyThumb(currencyName: string) {
    return `https://www.coinlore.com/img/50x50/${currencyName}.png`;
  }
}
