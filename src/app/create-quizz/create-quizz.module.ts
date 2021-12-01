import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateQuizzRoutingModule } from './create-quizz-routing.module';
import { CreateQuizzComponent } from './create-quizz.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AutosizeModule } from 'ngx-autosize';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    CreateQuizzComponent
  ],
  imports: [
    CommonModule,
    CreateQuizzRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AutosizeModule,
    NgxPaginationModule
  ]
})
export class CreateQuizzModule { }
