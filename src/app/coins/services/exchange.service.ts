import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Exchange } from '../models/exchange';

@Injectable({
  providedIn: 'root',
})
export class ExchangeService {
  apiUrl = `${environment.api}/exchanges`;

  http = inject(HttpClient);

  _getExchanges(): Observable<Exchange[]> {
    return this.http.get<Exchange[]>(this.apiUrl);
  }
}
