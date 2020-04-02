import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  patient = true;
  doctor = false;

  constructor() { }

  ngOnInit() {

  }
  changeAccount(accountType){
      if(accountType == "patient"){
        this.patient = true;
        this.doctor = false;
        return;
      }
      if(accountType == "doctor"){
        this.patient = false;
        this.doctor = true;
        return;
      }
   }
}
