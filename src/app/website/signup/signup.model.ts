export interface PatientModel {

  firstname: string;
  lastname: string;
  email: string;
  region: string;
  city: string;
  password: string;
  cpassword: string;
  sex: string;

}

export interface DoctorModel {

  firstname: string;
  lastname: string;
  tel:number;
  adminCode: string;
  email: string;
  profession:string;
  password: string;
  cpassword: string;
  sex: string;

}
