import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { UserComponent } from './user.component';
import { UserRoutingModule } from './user-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    UserComponent,
  ],
  imports: [
    // BrowserModule,
    UserRoutingModule,
    CommonModule
  ],
  providers: []
})
export class UserModule { }
