import { Component, OnInit } from '@angular/core';
import { AccountService } from '../shared/services/account.service';
import { Router } from '@angular/router';
import { ToastrService } from 'src/app/shared/toastr.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {


  constructor(private details: AccountService, private route: Router, private toastr: ToastrService) { }

  ngOnInit() {
    this.details.getDetails().subscribe((data: any) =>{
      if(data){
        // console.log(data)
      }
    },(err:any) => {
      if(err.statusText == "UNAUTHORIZED"){
        this.route.navigate(["/login"])
        localStorage.removeItem("userToken")
      }
      this.toastr.error(err.error.msg)
    })
  }


}
