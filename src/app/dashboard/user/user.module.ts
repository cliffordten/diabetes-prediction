import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    AskQuestionComponent
  ],
  imports: [
    // BrowserModule,NgModule
    UserRoutingModule,
    CommonModule
  ],
  providers: []
})
export class UserModule { }
