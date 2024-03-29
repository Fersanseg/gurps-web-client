import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthRequest } from '../types/auth-request';
import { LocalService } from './local.service';
import { LoginRestResponse } from '../types/rest-response';
import { Observable, map, of } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private storageService: LocalService
  ) { }

  public login(email: string, password: string): Observable<boolean> {
    const body: AuthRequest = { email, password };
    
    return of(false); // TODO Revert once properly secured
    return this.http.post<LoginRestResponse>(`${environment.serverUrl}/app/login`, body, { responseType: 'json' })
      .pipe(
        map(res => this._handleLogin(res))
    );
  }

  private _handleLogin(res: LoginRestResponse) {
    if (res.isError) {
      console.error(res.errorMessage);
      return false;
    }
    
    this.storageService.remove("token");
    this.storageService.add("token", res.data.body.idToken);

    return true;
  }
}
