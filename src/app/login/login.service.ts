import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _http: HttpClient) { }

  login(credentials) {
    const url = environment.baseUrl + environment.accountUrl
      + environment.loginUrl;
    return this._http.post(url, credentials);
  }
}
