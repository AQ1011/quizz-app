import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserPageRoutingModule } from './user-page-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { InfoComponent } from './info/info.component';


@NgModule({
  declarations: [
    ChangePasswordComponent,
    InfoComponent
  ],
  imports: [
    CommonModule,
    UserPageRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class UserPageModule { }
