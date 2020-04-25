import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TestService } from './test.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  @Output() clickStart = new EventEmitter()
  result ={
    classname: '',
    message:"",
    sub_message: ''
  };
  show: boolean = false;
  classname

  constructor(private testResult: TestService) { }

  ngOnInit() {

    this.testResult.getTestResult().subscribe((data: any) =>{
      if(data){

        if(data.help){
          this.show = true
          this.result = data.help;
          return
        }

        this.result = data;

      }
    },(err:any) => {
      console.log("err",err)
    })
  }

  startTest(){

    this.clickStart.emit()
  }
}
