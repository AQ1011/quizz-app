import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoggedIn } from '../services/loggedIn';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { InfoComponent } from './info/info.component';
import { UserPageComponent } from './user-page.component';

const routes: Routes = [
  { path: '', component: UserPageComponent, children: [
    { path: 'info', component: InfoComponent},
    { path: 'change-password', component: ChangePasswordComponent },
    { path: 'history', component: ChangePasswordComponent }
  ], canActivate: [LoggedIn]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [LoggedIn]
})
export class UserPageRoutingModule { }
