import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user.component';
import { HomeComponent } from 'src/app/dashboard/user/home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { DiabetesTestComponent } from './diabetes-test/diabetes-test.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { AskQuestionComponent } from './ask-question/ask-question.component';

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
      }
    ]},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
