import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function(){

      $("li.acc-icon").click(function(){

        if((!$("li.acc-icon").hasClass("active"))){
          $("li.acc-icon").addClass("active");
        }

        if($("li.acc-ico, li.acc-ic").hasClass("active")){
          $("li.acc-ico, li.acc-ic").removeClass("active");
        }
      })
      $("li.acc-ico").click(function(){
        if((!$("li.acc-ico").hasClass("active"))){
          $("li.acc-ico").addClass("active");
        }

        if($("li.acc-icon, li.acc-ic").hasClass("active")){
          $("li.acc-icon, li.acc-ic").removeClass("active");
        }
      })
      $("li.acc-ic").click(function(){
        if((!$("li.acc-ic").hasClass("active"))){
          $("li.acc-ic").addClass("active");
        }

        if($("li.acc-icon, li.acc-ico").hasClass("active")){
          $("li.acc-icon, li.acc-ico").removeClass("active");
        }
      })
    })
  }
}
