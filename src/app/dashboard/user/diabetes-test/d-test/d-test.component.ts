import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { QuestionService } from '../question.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { AnswerModel } from './answer.model';

@Component({
  selector: 'app-d-test',
  templateUrl: './d-test.component.html',
  styleUrls: ['./d-test.component.css']
})
export class DTestComponent implements OnInit {
  questionData:any ={};
  pagination:any ={}
  nopage = false;

  @Output() clickFinished = new EventEmitter()
  answer:any;

  answers:AnswerModel = {
    pregnancies: 0,
    glucose: 0,
    blood_pressure: 0,
    skin_thickness: 0,
    insulin: 0,
    height: 0,
    weight: 0,
    DPF: 0,
    age: 0
  };

  constructor(private question: QuestionService, private route: Router) { }


  ngOnInit() {
    this.question.getQuestion(1).subscribe((data: any) =>{
      if(data){
        this.questionData = data.question;
        this.pagination = data.pagination;
      }
    },(err:any) => {
      if(err.statusText == "UNAUTHORIZED"){
        this.route.navigate(["/login"])
      }
      console.log("err",err)
    })

  }

  finish(){
    this.clickFinished.emit();
    this.route.navigate(["test"])

  }

  nextQuestion(formAnswer: NgForm){

    this.matchAnswer(formAnswer.value.answer)

    formAnswer.reset()

    this.paginate()

  }

  matchAnswer(formAnswer){
    if(this.questionData.tag == "glucose"){
      this.answers.glucose = parseFloat(formAnswer);
    }
    if(this.questionData.tag == "preg"){
      this.answers.pregnancies = parseFloat(formAnswer);
    }
    if(this.questionData.tag == "pressure"){
      this.answers.blood_pressure = parseFloat(formAnswer);
    }
    if(this.questionData.tag == "age"){
      this.answers.age = parseFloat(formAnswer);
    }
    if(this.questionData.tag == "insulin"){
      this.answers.insulin = parseFloat(formAnswer);
    }
    if(this.questionData.tag == "weight"){
      this.answers.weight = parseFloat(formAnswer);
    }
    if(this.questionData.tag == "height"){
      this.answers.height = parseFloat(formAnswer);
    }
    if(this.questionData.tag == "skin"){
      this.answers.skin_thickness = parseFloat(formAnswer);
    }
    if(this.questionData.tag == "DPF"){
      this.answers.DPF = parseFloat(formAnswer);
    }
  }

  paginate(){

    if(this.pagination.next == null){

      this.nopage = true;

      this.sendAnswer(this.answers)

      return;
    }

    this.question.getQuestion(this.pagination.next).subscribe((data: any) =>{
      if(data){
        this.questionData = data.question;
        this.pagination = data.pagination;
      }
    },(err:any) => {
      if(err.statusText == "UNAUTHORIZED"){
        this.route.navigate(["/login"])
      }
      console.log("err",err)
    })

  }

  sendAnswer(answers: AnswerModel) {
    this.question.sendAnswers(answers).subscribe((data: any) =>{
      if(data){
        console.log(data)
      }
    },(err:any) => {
      console.log("err",err)
    })
  }


}
