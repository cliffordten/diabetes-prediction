import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './website/home/home.component';
import { LoginComponent } from './website/login/login.component';
import { SignupComponent } from './website/signup/signup.component';
import { Page404Component } from './shared/page404/page404.component';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: "full" },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'user', loadChildren:  () => import('./dashboard/user/user.module').then(m => m.UserModule), canActivate: [AuthGuard]},
  { path: 'doc', loadChildren:  () => import('./dashboard/user/user.module').then(m => m.UserModule), canActivate: [AuthGuard]},
  { path: '404page', component: Page404Component },
  { path: '**', redirectTo: '/404page', pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
