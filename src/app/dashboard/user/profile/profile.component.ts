import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
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

    });
  }

}
