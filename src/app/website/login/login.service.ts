import { Injectable } from '@angular/core';
import { LoginModel, UserDetails } from './login.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  loginUser(loginData: LoginModel){
    return this.http.post("/api/v1/login", loginData);
  }

}
