import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { UserComponent } from './user.component';
import { UserRoutingModule } from './user-routing.module';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from 'src/app/dashboard/shared/header/header.component';
import { SideNavComponent } from '../shared/side-nav/side-nav.component';
import { FooterComponent } from '../shared/footer/footer.component';

@NgModule({
  declarations: [
    UserComponent,
    HeaderComponent,
    SideNavComponent,
    FooterComponent
  ],
  imports: [
    // BrowserModule,NgModule
    UserRoutingModule,
    CommonModule
  ],
  providers: []
})
export class UserModule { }
