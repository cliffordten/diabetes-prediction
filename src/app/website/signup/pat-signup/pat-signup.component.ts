import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Component, OnInit } from '@angular/core';
import { PatientModel } from '../signup.model';
import { SignupService } from '../signup.service';

import {map} from 'rxjs/operators';
import { Router } from '@angular/router';
import { ToastrService } from 'src/app/shared/toastr.service';

@Component({
  selector: 'app-pat-signup',
  templateUrl: './pat-signup.component.html',
  styleUrls: ['../signup.component.css']
})
export class PatSignupComponent implements OnInit {

  signupForm: FormGroup;
  mouseOverLogin: Boolean;

  constructor(private signup: SignupService, private route: Router, private toastr: ToastrService) { }

  ngOnInit() {
    this.signupForm = new FormGroup({
      firstname:  new FormControl('', [Validators.required, Validators.maxLength(20)]),
      lastname: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      email: new FormControl('', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
      region: new FormControl('', [Validators.required,]),
      city:  new FormControl('', [Validators.required,]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      cpassword: new FormControl('', [Validators.required,]),
      sex: new FormControl('', [Validators.required,]),
    })
    // ^([a-zA-Z0-9_\/-\/.]+)@([a-zA-Z0-9_\/-\/.]+)\/.([a-zA-Z]{2,5})$
    // cliffordten@gmail.com
  }

  saveProfile(formValues) {

    if(formValues.password !== formValues.cpassword){
      this.toastr.error("Passwords MissMatch")
      return
    }

    if (this.signupForm.valid) {
      let userData:PatientModel = {
          firstname:formValues.firstname,
          lastname:formValues.lastname,
          email:formValues.email,
          region:formValues.region,
          city:formValues.city,
          password:formValues.password,
          cpassword:formValues.cpassword,
          sex:formValues.sex
      }

      this.signup.registerUser(userData).subscribe((data: any) =>{
        if(data){
          const access_token = data.access_token;
          localStorage.setItem("userToken", access_token);
          this.route.navigate(["/user"])
          this.toastr.success("Welcome, " + formValues.firstname + "\n Update Your Profile \n Don't Forget to a diabetes test ")
        }
      },(err:any) => {
        this.toastr.error(err.error.message)
      })
      return
    }

    this.mouseOverLogin=this.signupForm.invalid


  }

  validateFirstname() {
    return this.required(this.signupForm.controls.firstname);
  }
  validateLastname() {
    return this.required(this.signupForm.controls.lastname);
  }

  validateEmail() {
      return this.required(this.signupForm.controls.email);
  }
  validateRegion() {
    return this.required(this.signupForm.controls.region);
  }
  validateCity() {
    return this.required(this.signupForm.controls.city);
  }
  validatePassword() {
    return this.required(this.signupForm.controls.password);
  }
  validateCpassword() {
    return this.required(this.signupForm.controls.cpassword);
  }

  required(field) {
    return field.valid || field.untouched || !field.errors.required;
  }
  makeRequired() {
    return !this.validateFirstname() || !this.validateLastname() || !this.validateEmail() || !this.validateRegion() || !this.validateCity() || !this.validatePassword() || !this.validateCpassword();
  }

}
