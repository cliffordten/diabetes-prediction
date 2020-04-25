import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestService {


  constructor(private http: HttpClient) { }

  options = {headers: new HttpHeaders({ "Authorization": "Bearer " + localStorage.getItem("userToken") })};


  getTestResult(){

    return this.http.get("/api/v1/user/result/now", this.options);
}

}
