import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private _http: HttpClient) { }

  register(user) {
    const url = environment.baseUrl + environment.accountUrl
      + environment.registerUrl;

    return this._http.post(url, user);
  }

}
