import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AccountService } from '../../shared/services/account.service';
import { ToastrService } from 'src/app/shared/toastr.service';

@Component({
  selector: 'app-add-doctors',
  templateUrl: './add-doctors.component.html',
  styleUrls: ['./add-doctors.component.css']
})
export class AddDoctorsComponent implements OnInit {
  name
  email
  tel
  docCode
  hospitalDocs:any;
  doc=false;

  constructor(private doctor: AccountService, private toastr: ToastrService) { }

  ngOnInit() {
    this.doctor.getHospitalDoc().subscribe(data => {
      if(data){
        this.doc = true;
        this.hospitalDocs = data
      }
    }, err => {
      this.toastr.error(err.error.msg)
    })
  }

  addDoctor(form: NgForm){
    this.doctor.addDoctor(form.value).subscribe(data => {
      if(data){
        this.toastr.success(data["message"])
        this.docCode = data['doctor']['docCode']
      }
    }, err => {
      this.toastr.error(err.error.message)
    })
  }
}
