import { Component, OnInit, Output , EventEmitter} from '@angular/core';
import { AccountService } from '../../shared/services/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit {


  pagination:any ={}
  next = false;
  prev = false;

  doctors_first:any;
  doctors_sec:any;

  constructor(private details: AccountService, private route: Router) { }

  ngOnInit() {
    this.details.getAllDoctors(1).subscribe((data: any) =>{
      if(data){

        this.doctors_first = data.doctors.slice(0,4)
        this.doctors_sec = data.doctors.slice(4, data.doctors.length)
        this.pagination = data.pagination;
      }
    },(err:any) => {
      console.log("err",err)
    })

  }

  askQuestion(email){
    this.details.nextMessage(email);
    this.route.navigate(["user/ask-question"])
  }

  previous(){

      if(this.pagination.prev){
        this.details.getAllDoctors(this.pagination.prev).subscribe((data: any) =>{
          if(data){

            this.doctors_first = data.doctors.slice(0,4)
            this.doctors_sec = data.doctors.slice(4, data.doctors.length)
            this.pagination = data.pagination;
          }
        },(err:any) => {
          console.log("err",err)
        })
      }
    }

  nextpage(){

    if(this.pagination.next){
      this.details.getAllDoctors(this.pagination.next).subscribe((data: any) =>{
        if(data){
          this.doctors_first = data.doctors.slice(0,4)
          this.doctors_sec = data.doctors.slice(4, data.doctors.length)
          this.pagination = data.pagination;
        }
      },(err:any) => {
        console.log("err",err)
      })
    }
  }

}
