import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { map } from 'rxjs';
import { LocalService } from './local.service';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(
    private http: HttpClient,
    private localService: LocalService
  ) { }

  createTrait() {
    const data = {};
    const headers = new HttpHeaders({
      "Authorization": `Bearer ${this.localService.get("token") || ""}`
    });
    return this.http.post(`${environment.serverUrl}/app/db/insert`, data, {headers, responseType: 'text'})
      .pipe(
        map(res => this._handleInsert(res))
      );
  }

  private _handleInsert(res: Object): any {
    return res;
  }
}
