import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../shared/services/account.service';
import { Router } from '@angular/router';
import { ToastrService } from 'src/app/shared/toastr.service';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {


  pagination:any ={}
  next = false;
  prev = false;

  patients_first:any;
  patients_sec:any;

  constructor(private details: AccountService, private route: Router, private toastr: ToastrService) { }

  ngOnInit() {
    this.details.getAllPatients(1).subscribe((data: any) =>{
      if(data){
console.log(data)
        this.patients_first = data.patients.slice(0,4)
        this.patients_sec = data.patients.slice(4, data.patients.length)
        this.pagination = data.pagination;
      }
    },(err:any) => {
      console.log("err",err)
      this.toastr.info(err)
    })

  }

  askQuestion(email){
    this.details.nextMessage(email);
    this.route.navigate(["user/ask-question"])
  }

  previous(){

      if(this.pagination.prev){
        this.details.getAllPatients(this.pagination.prev).subscribe((data: any) =>{
          if(data){

            this.patients_first = data.patients.slice(0,4)
            this.patients_sec = data.patients.slice(4, data.patients.length)
            this.pagination = data.pagination;
          }
        },(err:any) => {
          console.log("err",err)
        })
      }
    }

  nextpage(){

    if(this.pagination.next){
      this.details.getAllPatients(this.pagination.next).subscribe((data: any) =>{
        if(data){
          this.patients_first = data.patients.slice(0,4)
          this.patients_sec = data.patients.slice(4, data.patients.length)
          this.pagination = data.pagination;
        }
      },(err:any) => {
        console.log("err",err)
      })
    }
  }

}
