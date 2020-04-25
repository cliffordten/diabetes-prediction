import { Component, OnInit, Input } from '@angular/core';
import { AccountService } from '../../shared/services/account.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 userDetails: any;
 switch = true;

  constructor(private details: AccountService) { }

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

}
