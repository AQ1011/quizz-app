import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoggedIn } from '../services/loggedIn';
import { CreateQuizzComponent } from './create-quizz.component';

const routes: Routes = [
  { path: '', component: CreateQuizzComponent, canActivate:[LoggedIn]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [LoggedIn]
})
export class CreateQuizzRoutingModule { }
