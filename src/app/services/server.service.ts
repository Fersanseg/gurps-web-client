import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(private http: HttpClient) { }

  createTrait() {
    const data = {};
    return this.http.post(`${environment.serverUrl}/app/insert`, data)
      .pipe(
        map(res => this._handleInsert(res))
      );
  }

  private _handleInsert(res: Object): any {
    return res;
  }
}
