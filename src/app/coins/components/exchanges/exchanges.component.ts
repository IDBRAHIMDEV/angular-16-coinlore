import { Exchange } from '../../models/exchange';
import { ExchangeService } from './../../services/exchange.service';
import { Component, OnInit, inject, signal } from '@angular/core';

@Component({
  selector: 'app-exchanges',
  templateUrl: './exchanges.component.html',
  styleUrls: ['./exchanges.component.css'],
})
export class ExchangesComponent implements OnInit {
  exchangeService = inject(ExchangeService);

  exchanges = signal<Exchange[]>([]);

  ngOnInit(): void {
    this.getExchanges();
  }

  getExchanges() {
    this.exchangeService._getExchanges().subscribe({
      next: (res) => {
        this.exchanges.set(Object.values(res));
      },
    });
  }

  exchangeThumb(exchangeName: string) {
    return `https://www.coinlore.com/img/exchanges/${exchangeName}.png`;
  }
}
