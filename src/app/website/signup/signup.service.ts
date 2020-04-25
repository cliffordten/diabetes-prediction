import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PatientModel, DoctorModel } from './signup.model';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http: HttpClient) { }

  registerUser(user: PatientModel){
    return this.http.post("/api/v1/user/register", user);
  }

  registerDoc(doc: DoctorModel){
    return this.http.post("/api/v1/doc/register", doc);
  }
}
