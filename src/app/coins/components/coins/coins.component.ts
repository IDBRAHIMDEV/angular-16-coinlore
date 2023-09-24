import { LazyLoadEvent } from 'primeng/api';
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

  start = signal<number>(0);
  limit = signal<number>(100);

  coinsNum = 0;

  ngOnInit(): void {
    this.getAllCoins();
  }

  next() {
    this.start.update((prev) => prev + this.limit());
    this.getAllCoins();
  }

  back() {
    if (this.start()) {
      this.start.update((prev) => prev - this.limit());
      this.getAllCoins();
      return;
    }

    this.start.set(0);
  }

  getAllCoins() {
    this.coinsService._getAllCoins(this.start(), this.limit()).subscribe({
      next: ({ data, info: { coins_num } }) => {
        this.coinsNum = coins_num;
        this.tickers.set(data);
      },
    });
  }

  currencyThumb(currencyName: string) {
    return `https://www.coinlore.com/img/50x50/${currencyName}.png`;
  }

  getSeverity(percentChange: string) {
    const percentChangeFloat: number = parseFloat(percentChange);
    return percentChangeFloat > 0
      ? ['success', 'pi pi-arrow-up']
      : ['danger', 'pi pi-arrow-down'];
  }

  loadCarsLazy(event: LazyLoadEvent) {
    //simulate remote connection with a timeout
    setTimeout(() => {
      console.log('salam');
    }, Math.random() * 1000 + 250);
  }
}
