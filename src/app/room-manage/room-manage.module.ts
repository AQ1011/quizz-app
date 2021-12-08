import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RoomManageRoutingModule } from './room-manage-routing.module';
import { MyQuizzesComponent } from './my-quizzes/my-quizzes.component';
import { RoomDetailsComponent } from './room-details/room-details.component';
import { EditRoomComponent } from './edit-room/edit-room.component';
import { CreateQuizzComponent } from './create-quizz/create-quizz.component';
import { RouterModule } from '@angular/router';
import { RoomManageComponent } from './room-manage.component';
import { RoomStartComponent } from './room-start/room-start.component';



@NgModule({
  declarations: [
    MyQuizzesComponent,
    RoomDetailsComponent,
    EditRoomComponent,
    CreateQuizzComponent,
    RoomManageComponent,
    RoomStartComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    RoomManageRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,    
  ]
})
export class RoomManageModule { }
