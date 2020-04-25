import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../shared/services/account.service';
import { ToastrService } from 'src/app/shared/toastr.service';

@Component({
  selector: 'app-result-history',
  templateUrl: './result-history.component.html',
  styleUrls: ['../doctors/doctors.component.css', './result-history.component.css']
})
export class ResultHistoryComponent implements OnInit {
  results: any = [
]
displaymess=false;
resultss=true;
details: any;
  constructor(private result: AccountService, private toastr: ToastrService) { }

  ngOnInit() {
    this.result.getAllUserResults().subscribe(data => {
      if(data){
        this.resultss = false
        data['results'].forEach(element => {
          const dataReceived ={
            classname: "",
              result: "",
              date: "",
              hr: "",
              min: "",
              answer_id: 2
          }
          let date =element.date.split("-")
          let time =element.time.split(":")
          dataReceived.classname = element.classname;
          if(element.classname == "none"){
            dataReceived.result = "Negative"
          }
          if(element.classname == "error"){
            dataReceived.result = "Positive"
          }
          dataReceived.date = new Date(date[0], date[1], date[2]).toDateString();
          dataReceived.hr = time[0];
          dataReceived.min = time[1];
          dataReceived.answer_id = element.answer_id;
          this.results.push(dataReceived)
        });
      }
    }, (err) => {
      if(err.statusText == "UNAUTHORIZED"){
        localStorage.removeItem("userToken")
        this.toastr.error(err.error.msg)
        return
      }
        this.toastr.info(err.error.message)
    })
  }
  showDetails(id){
    this.result.getResultDetails(id).subscribe(data => {
      if(data){
        this.details = data["answers"]
        this.displaymess = false
        this.displaymess = true;

      }

    }, (err) => {
      if(err.statusText == "UNAUTHORIZED"){
        localStorage.removeItem("userToken")
        this.toastr.error(err.error.msg)
        return
      }
      this.toastr.info(err.error.message)
    })
  }
}
