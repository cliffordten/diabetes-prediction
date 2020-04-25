import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { AccountService } from '../../shared/services/account.service';
import { Router } from '@angular/router';
import { ToastrService } from 'src/app/shared/toastr.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userDetails:any = {}

  inputDetails={}

  constructor(private details: AccountService, private route: Router, private toastr: ToastrService) { }

  ngOnInit() {
     this.jquery();

    this.details.getDetails().subscribe((data: any) =>{
      if(data){
        this.userDetails = data;
      }
    },(err:any) => {
      if(err.statusText == "UNAUTHORIZED"){
        this.route.navigate(["/login"])
      }
      this.toastr.error(err.error.message)
    })

  }

  changePassword(oldPassword, newPassword, cPassword){

    const password = {
      "oldPassword": oldPassword,
      "newPassword": newPassword,
      "cPassword": cPassword,
    }

    if(newPassword !== cPassword){
      this.toastr.error("Passwords Missmatch")
      return
    }

    if(newPassword.length < 8){
      this.toastr.error("Password must be atlaest 8 character")
      return
    }

    this.details.updatePassword(password).subscribe((data: any) =>{
      if(data){
        this.toastr.success(data.message)
      }
    },(err:any) => {
      this.toastr.error(err.error.message)
    })

  }

  updateDetails(){
    this.details.updateDetails(this.userDetails).subscribe((data: any) =>{
      if(data){
        this.toastr.success(data.message)
      }
    },(err:any) => {
      this.toastr.error(err.error.message)
    })
  }

  onChange(inp, value){
    if(inp.name == "name"){
      this.userDetails.firstname = value.split(" ")[0]
      this.userDetails.lastname = value.split(" ")[1]
    }
    if(inp.name == "username"){
      this.userDetails.username = value
    }
    if(inp.name == "email"){
      this.userDetails.email = value
    }
    if(inp.name == "dob"){
      this.userDetails.dob = value
    }
    if(inp.name == "pob"){
      this.userDetails.pob = value
    }
    if(inp.name == "sex"){
      this.userDetails.sex = value
    }
    if(inp.name == "region"){
      this.userDetails.region = value
    }
    if(inp.name == "city"){
      this.userDetails.city = value
    }
    if(inp.name == "tel"){
      this.userDetails.tel = value
    }
    if(inp.name == "bloodgrp"){
      this.userDetails.bloodgrp = value
    }
    if(inp.name == "bloodpres"){
      this.userDetails.bloodpres = value
    }
    if(inp.name == "weight"){
      this.userDetails.weight = value
    }
    if(inp.name == "height"){
      this.userDetails.height = value
    }
    if(inp.name == "profession"){
      this.userDetails.profession = value
    }

  }

jquery(){
  $(document).ready(function () {

    $('table tr td:nth-child(2), table tr td.edit').mouseenter(function (e) {
      $(e.target).siblings('td.edit').removeClass('visibility')
    })

    $('table').mouseleave(function () {
      $('svg').removeClass("hide")
      $('td.edit').removeClass('hide').addClass('visibility');
      $('td.txt').removeClass('hide')
      $('td.bot').addClass('hide');
      $('td.input').addClass('hide');

    })

    $('td.edit').click(function (e) {

      if ($(e.target).is("svg")) {
        $(e.target).parent().removeClass('visibility').addClass('hide');
        $(e.target).parent().siblings('td.txt').addClass('hide');
        $(e.target).parent().siblings('td.input').removeClass('hide');
        $(e.target).parent().siblings('td.bot').removeClass('hide');
      }

      if ($(e.target).is('td.edit')) {
        $(e.target).removeClass('visibility').addClass('hide');
        $(e.target).siblings('td.txt').addClass('hide');
        $(e.target).siblings('td.input').removeClass('hide');
        $(e.target).siblings('td.bot').removeClass('hide');
      }

      if ($(e.target).is('path')) {
        $(e.target).parent().parent().removeClass('visibility').addClass('hide');
        $(e.target).parent().parent().siblings('td.txt').addClass('hide');
        $(e.target).parent().parent().siblings('td.input').removeClass('hide');
        $(e.target).parent().parent().siblings('td.bot').removeClass('hide');
      }

    })

    $('td.bot svg:nth-child(2)').click(function () {
      $('svg').removeClass("hide")
      $('td.edit').removeClass('hide').addClass('visibility');
      $('td.txt').removeClass('hide')
      $('td.bot').addClass('hide');
      $('td.input').addClass('hide');
    })

    $('td.bot svg:nth-child(1)').click(function (e) {
      let val = " "
      if ($(e.target).is('path')) {
        val = $(e.target).parent().parent().siblings('td.input').children().val();
      }
      if ($(e.target).is('svg')) {
        val = $(e.target).parent().siblings('td.input').children().val();
      }
      if(val){
        $('svg').removeClass("hide")
        $('td.edit').removeClass('hide').addClass('visibility');
        $('td.txt').removeClass('hide')
        $('td.bot').addClass('hide');
        $('td.input').addClass('hide');
      }
    })

  });
}

}
