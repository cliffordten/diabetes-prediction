import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Chart } from 'chart.js';
import { AccountService } from '../../shared/services/account.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {

  diabetesGrowthInWorld: any;
  glucoseGrowth: any;
  glucose =[];
  dates =[];
  bldPressure =[];
  insulin =[];
  results = false;
  constructor(private result: AccountService) { }

  ngOnInit() {
    var canvas = <HTMLCanvasElement> document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var canvas = <HTMLCanvasElement> document.getElementById("canvas2");
var ctx2 = canvas.getContext("2d");

    this.diabetesGrowthInWorld = new Chart(ctx,{
    type: 'line',
    data: {
      labels: [2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,"---",2030,2045],
      datasets: [
        {
          label: "Diabetes growth rate",
          data: [6.6,6.4,7.1,8.3,8.5,8.8,8.6,8.8,9.0,9.3,9.5,10.0,10.2,10.9],
          borderColor: "#3cba9f",
          fill: false
        },
      ]
    },
    options: {
      title:{
        display: true,
        text: "Number of people with diabetes in world in percentage(%)",
        fontSize: 16,
        position: 'bottom',
        padding: 10,
        fontStyle: 'italic',
        fontColor: '#18d26e'
      },
      legend: {
        labels:{
          fontSize: 12,
          padding: 15
        },
        position: 'top',
        display: true
      },
      scales: {
        xAxes: [{
          display: true
        }],
        yAxes: [{
          display: true
        }],
      }
    }
  });

  this.result.getAllUserAnswers().subscribe(data => {
    if(data){
      this.results = true
      data['answers'].forEach(ans => {
        this.glucose.push(ans['glucose']/100)
        this.dates.push(ans['date'])
        this.bldPressure.push(ans['blood_Pressure']/100)
        this.insulin.push(ans['insulin']/100)
      });
    }
  }, (err) => {
    console.log(err)
  })


  this.glucoseGrowth = new Chart(ctx2,{
    type: 'line',
    data: {
      labels: this.dates,
      datasets: [
        {
          label: "Glucose",
          data: this.glucose,
          borderColor: "#3cba9f",
          fill: false
        },
        {
          label: "Blood Pressure",
          data: this.bldPressure,
          borderColor: "#753cba",
          fill: false
        },
        {
          label: "Insulin",
          data: this.insulin,
          borderColor: "#ba3c7f",
          fill: false
        },
      ]
    },
    options: {
      title:{
        display: true,
        text: "Your Result Statistics Rate from test",
        fontSize: 16,
        position: 'bottom',
        padding: 10,
        fontStyle: 'italic',
        fontColor: '#18d26e'
      },
      legend: {
        labels:{
          fontSize: 12,
          padding: 15
        },
        position: 'top',
        display: true
      },
      scales: {
        xAxes: [{
          display: true
        }],
        yAxes: [{
          display: true
        }],
      }
    }
  });
console.log(this.dates)
  }
}
