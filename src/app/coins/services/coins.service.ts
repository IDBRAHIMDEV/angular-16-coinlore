import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class CoinsService {
  apiUrl = `${environment.api}/tickers`;

  constructor() {}
}
