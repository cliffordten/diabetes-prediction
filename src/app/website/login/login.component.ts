import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginModel } from './login.model';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { ToastrService } from 'src/app/shared/toastr.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ["../signup/signup.component.css", './login.component.css']
})
export class LoginComponent implements OnInit {
  userlogin = true;
  doctorlogin = false;
  adminlogin = false;
  loginForm: FormGroup;
  mouseOverLogin: Boolean;

  constructor(private login : LoginService, private route: Router, private toastr: ToastrService) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
      password: new FormControl('', [Validators.required,])
    });
}

  auth(formValues) {
    if (this.loginForm.valid) {
      let loginData: LoginModel = {
        email: formValues.email,
        password: formValues.password
      }

      this.login.loginUser(loginData).subscribe((data: any) =>{
        if(data){
          const access_token = data.access_token;
          localStorage.setItem("userToken", access_token);
          if(data.accountType == "doc"){
            this.route.navigate(["/doc"])
            return
          }
          if(data.accountType == "admin"){
            this.route.navigate(["/admin"])
            return
          }
          this.route.navigate(["/user"])
        }
      },(err:any) => {
        this.toastr.error(err.error.message)
      })
      return
    }

    this.mouseOverLogin=this.loginForm.invalid
    }


  accountSwitcher(accountType) {
    if (accountType == "user") {
      this.userlogin = true;
      this.doctorlogin = false;
      this.adminlogin = false;
      return;
    }
    if (accountType == "doctor") {
      this.userlogin = false;
      this.doctorlogin = true;
      this.adminlogin = false;
      return;
    }
    if (accountType == "admin") {
      this.userlogin = false;
      this.doctorlogin = false;
      this.adminlogin = true;
      return;
    }
  }
  validateEmail(){
    return this.required(this.loginForm.controls.email);
  }

  required(field) {
    return field.valid || field.untouched;
  }

}
