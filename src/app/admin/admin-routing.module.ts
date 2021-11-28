import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AdminModule } from './admin.module';
import { ManageUserComponent } from './manage-user/manage-user.component';

const routes: Routes = [
  { path: '', component: AdminComponent, children: [
    { path: 'manage-user', component: ManageUserComponent},
    { path: 'manage-quiz', component: ManageUserComponent},
    { path: '**', redirectTo: 'manage-user'}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
