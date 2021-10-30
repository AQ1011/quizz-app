import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateQuizzRoutingModule } from './create-quizz-routing.module';
import { CreateQuizzComponent } from './create-quizz.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CreateQuizzComponent
  ],
  imports: [
    CommonModule,
    CreateQuizzRoutingModule,
    FormsModule
  ]
})
export class CreateQuizzModule { }
