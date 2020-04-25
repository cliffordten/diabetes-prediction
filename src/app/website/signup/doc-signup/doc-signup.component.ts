import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { DoctorModel } from '../signup.model';
import { SignupService } from '../signup.service';
import { Router } from '@angular/router';
import { ToastrService } from 'src/app/shared/toastr.service';

@Component({
  selector: 'app-doc-signup',
  templateUrl: './doc-signup.component.html',
  styleUrls: ['../signup.component.css']
})
export class DocSignupComponent implements OnInit {

  signupFormd: FormGroup;
  mouseOverLogin: Boolean;

  constructor(private signup: SignupService, private route: Router, private toastr: ToastrService) { }

  ngOnInit() {
    this.signupFormd = new FormGroup({
      firstname: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      lastname: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      email: new FormControl('', [Validators.required,]),
      profession: new FormControl('', [Validators.required,]),
      adminCode: new FormControl('', [Validators.required]),
      tel: new FormControl('', [Validators.required, Validators.pattern('^(237[0-9]{9}$)|^(6[0-9]{8}$)'), Validators.maxLength(13)]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      cpassword: new FormControl('', [Validators.required,]),
      sex: new FormControl('', [Validators.required,]),
    })

  }

  saveProfile(formValues) {

    if(formValues.password !== formValues.cpassword){
      this.toastr.error("Passwords MissMatch")
      return
    }

    if (this.signupFormd.valid) {
      let userData:DoctorModel = {
          firstname:formValues.firstname,
          lastname:formValues.lastname,
          email:formValues.email,
          profession: formValues.profession,
          adminCode:formValues.adminCode,
          tel:formValues.tel,
          password:formValues.password,
          cpassword:formValues.cpassword,
          sex:formValues.sex
      }

      this.signup.registerDoc(userData).subscribe((data: any) =>{
        if(data){
          const access_token = data.access_token;
          localStorage.setItem("userToken", access_token);
          this.route.navigate(["/doc"])
          this.toastr.success("Welcome, " + formValues.firstname + "\n Update Your Profile \n Don't Forget to a diabetes test ")
        }
      },(err:any) => {
        this.toastr.error(err.error.message)
      })
      return
    }

    this.mouseOverLogin=this.signupFormd.invalid

  }
  validateProfession() {
    return this.required(this.signupFormd.controls.profession);
  }
  validateFirstname() {
    return this.required(this.signupFormd.controls.firstname);
  }
  validateLastname() {
    return this.required(this.signupFormd.controls.lastname);
  }

  validateEmail() {
      return this.required(this.signupFormd.controls.email);
  }

  validatePassword() {
    return this.required(this.signupFormd.controls.password);
  }
  validateCpassword() {
    return this.required(this.signupFormd.controls.cpassword);
  }
  validateAdminCode() {
    return this.required(this.signupFormd.controls.adminCode);
  }
  validateTel() {
    return this.required(this.signupFormd.controls.tel);
  }

  required(field) {
    return field.valid || field.untouched;
  }

  makeRequiredd() {
    return this.validateFirstname || this.validateLastname || this.validateProfession || this.validateEmail || this.validateAdminCode || this.validateTel || this.validatePassword || this.validateCpassword;
  }

}
