import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ["../signup/signup.component.css",'./login.component.css']
})
export class LoginComponent implements OnInit {
  userlogin = true;
  doctorlogin = false;
  adminlogin = false;

  constructor() { }

  ngOnInit() {
  }

  accountSwitcher(accountType){
    if(accountType == "user"){
      this.userlogin = true;
      this.doctorlogin = false;
      this.adminlogin = false;
      return;
    }
    if(accountType == "doctor"){
      this.userlogin = false;
      this.doctorlogin = true;
      this.adminlogin = false;
      return;
    }
    if(accountType == "admin"){
      this.userlogin = false;
      this.doctorlogin = false;
      this.adminlogin = true;
      return;
    }
  }


}
