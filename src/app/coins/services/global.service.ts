import { Global } from './../models/global';
import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class GlobalService {
  apiUrl = `${environment.api}/global`;

  http = inject(HttpClient);

  _getGlobal(): Observable<Global[]> {
    return this.http.get<Global[]>(this.apiUrl);
  }
}
