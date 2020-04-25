import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AnswerModel } from './d-test/answer.model';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http: HttpClient) { }

  options = {headers: new HttpHeaders({ "Authorization": "Bearer " + localStorage.getItem("userToken") })};


  getQuestion(page){

    return this.http.get("/api/v1/question?page="+page, this.options);
  }

  sendAnswers(answers: AnswerModel){

    return this.http.post("/api/v1/user/answer", answers, this.options);
  }
}
