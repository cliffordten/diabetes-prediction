import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user.component';
import { HomeComponent } from 'src/app/dashboard/user/home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { DiabetesTestComponent } from './diabetes-test/diabetes-test.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { AskQuestionComponent } from './ask-question/ask-question.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { ResultHistoryComponent } from './result-history/result-history.component';
import { PatientsComponent } from './patients/patients.component';
import { CreatePostComponent } from './create-post/create-post.component';
const routes: Routes = [
  {path: '', component: UserComponent,
    children: [
      {
        path: 'dashboard', component: HomeComponent
      },
      {
        path: '', redirectTo: 'dashboard', pathMatch: "full"
      },
      {
        path: 'profile', component: ProfileComponent
      },
      {
        path: 'test', component: DiabetesTestComponent
      },
      {
        path: 'statistics', component: StatisticsComponent
      },
      {
        path: 'ask-question', component: AskQuestionComponent
      },
      {
        path: 'doctors', component: DoctorsComponent
      },
      {
        path: 'patients', component: PatientsComponent
      },
      {
        path: 'create-post', component: CreatePostComponent
      },
      {
        path: 'history', component: ResultHistoryComponent
      }
      ,
      {
        path: 'questions', component: AskQuestionComponent
      }
    ]},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
