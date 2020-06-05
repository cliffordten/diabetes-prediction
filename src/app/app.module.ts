import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './website/header/header.component';
import { HomeComponent } from './website/home/home.component';
import { LoginComponent } from './website/login/login.component';
import { SignupComponent } from './website/signup/signup.component';
import { Page404Component } from './shared/page404/page404.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DocSignupComponent } from './website/signup/doc-signup/doc-signup.component';
import { PatSignupComponent } from './website/signup/pat-signup/pat-signup.component';
import { SignupService } from './website/signup/signup.service';
import { LoginService } from './website/login/login.service';
import { AuthGuard } from './guards/auth.guard';
import { HttpClientModule } from '@angular/common/http';
import { ToastrService } from './shared/toastr.service';
import { AboutDiabetesComponent } from './website/about-diabetes/about-diabetes.component';
import { GetStartedComponent } from './website/get-started/get-started.component';
import { FooterComponent } from './website/footer/footer.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    Page404Component,
    DocSignupComponent,
    PatSignupComponent,
    AboutDiabetesComponent,
    GetStartedComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ChartsModule

  ],
  providers: [SignupService, LoginService, AuthGuard, ToastrService],
  bootstrap: [AppComponent]
})
export class AppModule { }
