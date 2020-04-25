import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'dashboard-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  userDetails: any;
  switch = true

  constructor(private details: AccountService, private route: Router) { }

  ngOnInit() {
    this.details.getDetails().subscribe((data: any) =>{
      if(data){
        this.userDetails = data
        if(data.accountType == "doc"){
          this.switch = false;
        }
        if(data.accountType == "user"){
          this.switch = true;
        }
      }
    },(err:any) => {
      console.log("err",err)
    })
  }

  logout(){
    localStorage.removeItem('userToken');
    this.route.navigate(['/home'])
  }
}
