import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject, BehaviorSubject } from 'rxjs';
import { AskQuestionModel } from '../../user/ask-question/question.model';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }


  options = {headers: new HttpHeaders({ "Authorization": "Bearer " + localStorage.getItem("userToken") })};


  getDetails(){

    return this.http.get("/api/v1/user/details", this.options);
  }

  updateDetails(details: any){
    return this.http.put("/api/v1/user/details/update", details,  this.options);
  }

  updatePassword(password: any){
    return this.http.put("/api/v1/user/password/update", password,  this.options);
  }

  getAllDoctors(page){
    return this.http.get("/api/v1/doc/all?page="+page , this.options);
  }

  getAllPatients(page){
    return this.http.get("/api/v1/pat/all?page="+page , this.options);
  }

  getAllUserResults(){
    return this.http.get("/api/v1/user/result", this.options);
  }

  getAllUserAnswers(){
    return this.http.get("/api/v1/user/answer", this.options);
  }

  getResultDetails(id){
    return this.http.get("/api/v1/user/answer/"+id, this.options);
  }

  askQuestion(data: AskQuestionModel){
    return this.http.post('/api/v1/user/askquestion', data, this.options);
  }

  getAskedQuestion(){
    return this.http.get('/api/v1/user/askquestion', this.options);
  }

  createResponse(id, data){
    return this.http.post('/api/v1/user/response/'+id, data, this.options);
  }

  getResponse(id){
    return this.http.get('/api/v1/user/response/'+id, this.options);
  }

  addDoctor(data){
    return this.http.post("/api/v1/add/doctor", data, this.options);
  }

  getHospitalDoc(){
    return this.http.get("/api/v1/all/doctor", this.options)
  }


  private message = new BehaviorSubject('An Error Occured please type doctor email');
  sharedMessage = this.message.asObservable();

  nextMessage(message: string) {
    this.message.next(message)
  }

}
