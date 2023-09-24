import { Global } from './../../models/global';
import { Component, OnInit, inject, signal } from '@angular/core';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'app-global',
  templateUrl: './global.component.html',
  styleUrls: ['./global.component.css'],
})
export class GlobalComponent implements OnInit {
  globalService = inject(GlobalService);

  global = signal<Global>({
    coins_count: 0,
    active_markets: 0,
    total_mcap: 0,
    total_volume: 0,
    btc_d: 0,
    eth_d: 0,
    mcap_change: 0,
    volume_change: 0,
    avg_change_percent: 0,
    volume_ath: 0,
    mcap_ath: 0,
  });

  ngOnInit(): void {
    this.getGlobal();
  }

  getGlobal() {
    this.globalService._getGlobal().subscribe({
      next: ([res]) => {
        console.log(res);
        this.global.set(res);
      },
    });
  }
}
