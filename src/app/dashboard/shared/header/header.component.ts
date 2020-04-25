import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/account.service';
import { Router } from '@angular/router';
import { ToastrService } from 'src/app/shared/toastr.service';

@Component({
  selector: 'dashboard-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  userDetails:any = {}

  constructor(private details: AccountService, private route: Router, private toastr: ToastrService) { }

  ngOnInit() {
    this.details.getDetails().subscribe((data: any) =>{
      if(data){
        this.userDetails = data;
        // console.log(this.userDetails.firstname)
      }
    },(err:any) => {
      if(err.statusText == "UNAUTHORIZED"){
        this.route.navigate(["/login"])
      } 
      this.toastr.error(err.error.msg)
    })
  }

}
