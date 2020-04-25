import { Component } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'diabetes-prediction';
  showHead: boolean = true;

  constructor(private router: Router) {

  // on router change to '/login', set the variable showHead to false
  router.events.forEach((event) => {
    if (event instanceof NavigationStart) {
      if (event['url'].startsWith('/user') || event['url'].startsWith('/doc') || event['url'].startsWith('/404page')) {
        this.showHead = false;
      } else {
        this.showHead = true;
      }
    }
  });
}


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
