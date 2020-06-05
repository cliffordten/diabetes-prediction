import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  showHead: boolean = true;
  constructor() {


}
  ngOnInit() {
    $(document).ready(function(){

       //adding sticky class to the header on scroll
        $(window).scroll(function() {
          if (($("header").offset().top === 0)) {
            $("header").toggleClass("sticky");

          }
        });

        if(!($('body').has("#slider-main").length == 0)){

          $('header').css("background-color","transparent");
        }


        $('.no-bg').click(function(){
          $('header').css("background-color","transparent");
        })

        $('.bg').click(function(){
          $('header').css("background-color","#444");
          window.location.reload()
        })

    });

  }

}
