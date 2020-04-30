import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgChartjsModule } from 'ng-chartjs';

import { UserComponent } from './user.component';
import { UserRoutingModule } from './user-routing.module';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from 'src/app/dashboard/shared/header/header.component';
import { SideNavComponent } from '../shared/side-nav/side-nav.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { DiabetesTestComponent } from './diabetes-test/diabetes-test.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { AskQuestionComponent } from './ask-question/ask-question.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { ResultHistoryComponent } from './result-history/result-history.component';
import { WelcomeComponent } from './diabetes-test/welcome/welcome.component';
import { DTestComponent } from './diabetes-test/d-test/d-test.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { QuestionService } from './diabetes-test/question.service';
import { TestService } from './diabetes-test/welcome/test.service';
import { AccountService } from '../shared/services/account.service';
import { PatientsComponent } from './patients/patients.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { AddDoctorsComponent } from '../admin/add-doctors/add-doctors.component';
import { LoadderComponent } from './diabetes-test/d-test/loadder/loadder.component';

@NgModule({
  declarations: [
    UserComponent,
    HeaderComponent,
    SideNavComponent,
    FooterComponent,
    HomeComponent,
    ProfileComponent,
    DiabetesTestComponent,
    StatisticsComponent,
    AskQuestionComponent,
    DoctorsComponent,
    ResultHistoryComponent,
    WelcomeComponent,
    DTestComponent,
    PatientsComponent,
    CreatePostComponent,
    AddDoctorsComponent,
    LoadderComponent,
  ],
  imports: [
    // BrowserModule,NgModule
    UserRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgChartjsModule,
  ],
  providers: [QuestionService, TestService, AccountService]
})
export class UserModule { }
