import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateQuizzComponent } from './create-quizz.component';

const routes: Routes = [
  { path: '', component: CreateQuizzComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateQuizzRoutingModule { }
