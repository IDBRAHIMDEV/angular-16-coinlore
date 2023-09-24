import { Injectable, inject } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tickerdata } from '../models/tickers';

@Injectable({
  providedIn: 'root',
})
export class CoinsService {
  apiUrl = `${environment.api}/tickers`;

  http = inject(HttpClient);

  _getAllCoins(start: number = 0, limit: number = 100): Observable<Tickerdata> {
    return this.http.get<Tickerdata>(
      `${this.apiUrl}/?start=${start}&limit=${limit}`
    );
  }
}
