import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../shared/services/account.service';
import { NgForm } from '@angular/forms';
import { QuestionModel, ResponseModel, AskQuestionModel } from './question.model';
import { ToastrService } from 'src/app/shared/toastr.service';

@Component({
  selector: 'app-ask-question',
  templateUrl: './ask-question.component.html',
  styleUrls: ['./ask-question.component.css']
})
export class AskQuestionComponent implements OnInit {
id
  title
  tag
  question
  response
  doc= false;
  showAnswer =false;
  showReply = false;
  showQuestion = true;
  responsed: any =[]
  questionArray:any=[]
  // selectedField
  docEmail
  constructor(private details: AccountService, private toastr: ToastrService) { }

  ngOnInit() {
    this.details.sharedMessage.subscribe((message)=> {
      this.docEmail = message.includes("@") ? message : "";

      if(message.includes("@")){
          this.doc = true;
      }

      this.details.getAskedQuestion().subscribe((data) => {
        if(data){
          this.questionArray = data
        }
      }, err =>{
        this.toastr.error(err.error.message)
      })


    })


  }
  ask(form: NgForm){
    let tag = null;
    if(this.docEmail.includes("@")){
      tag = this.docEmail
    }
    let askquestion: AskQuestionModel ={
      title: form.value.title,
      question: form.value.question,
      tag: tag
    }
    this.details.askQuestion(askquestion).subscribe((data) => {
      if(data){
        let question:QuestionModel = {
          id: data["id"],
          title: form.value.title,
          question: form.value.question,
          tag: tag,
          date: new Date().toDateString(),
          time: new Date().toTimeString().split(" ")[0],
          name: data['name']
        }
        this.questionArray.push(question)
        this.toastr.success(data["message"])
      }
    }, err =>{
      console.log(err)
      this.toastr.error(err.error.msg)
    })

    form.reset()
  }

  toggleQuestion(form: NgForm, qid){
    this.details.createResponse(qid, form.value).subscribe(data => {
      if(data){
        let response: ResponseModel = {
          response: form.value.response,
          date: new Date().toDateString(),
          time: new Date().toTimeString().split(" ")[0],
          name: data['name'],
        }
        this.responsed.push(response)
        console.log(data)

        this.toastr.success(data['message'])
      }
    }, err => {
      this.toastr.error(err.error.msg)
    })
    form.reset()

    if(this.showReply){
      this.showAnswer =true;
      this.showQuestion =true;
     return this.showReply =false;
   }
  }

  toggleAnswer(questionid){

    this.details.getResponse(questionid).subscribe(data => {
      if(data['message']){
        this.toastr.info(data['message'])
        return
      }
      if(data){
        this.responsed = data
      }
    }, err => {
      this.toastr.error(err.error.message)
    })

    if(!this.showAnswer ){
      this.id = questionid
      return this.showAnswer =true;
    }
    if(this.showAnswer && this.id == questionid){
      return this.showAnswer =false;
    }
    if(this.showAnswer ){
      this.showAnswer =false;
      if(!this.showAnswer ){
        this.id = questionid
        return this.showAnswer =true;
      }
    }
  }


  toggleReply(questionid){
    if(!this.showReply){
      this.id = questionid
      this.showQuestion =false;
      return this.showReply =true;
    }

  }


  showfield(selectedField){

    if(selectedField == "A Specific Doctor"){
      if(!this.doc){
        return this.doc = true
      }
    }
    if(selectedField == "All Doctors"){
      if(this.doc){
        return this.doc = false
      }
    }

    return this.doc;
  }
  cancel(){
    if(this.showReply){

      this.showQuestion =true;
     return this.showReply =false;
   }
  }
}
