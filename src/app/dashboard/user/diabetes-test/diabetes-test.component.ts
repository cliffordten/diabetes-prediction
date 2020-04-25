import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diabetes-test',
  templateUrl: './diabetes-test.component.html',
  styleUrls: ['./diabetes-test.component.css']
})
export class DiabetesTestComponent implements OnInit {

  startTest = false;

  constructor() { }

  ngOnInit() {
  }

  switch(){
    if(!this.startTest){
      this.startTest = true;
    }else{
    this.startTest = false;
    }
  }
}
