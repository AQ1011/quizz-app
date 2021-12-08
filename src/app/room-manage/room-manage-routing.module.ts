import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoggedIn } from '../services/loggedIn';
import { CreateQuizzComponent } from './create-quizz/create-quizz.component';
import { EditRoomComponent } from './edit-room/edit-room.component';
import { MyQuizzesComponent } from './my-quizzes/my-quizzes.component';
import { RoomDetailsComponent } from './room-details/room-details.component';
import { RoomStartComponent } from './room-start/room-start.component';

const routes: Routes = [
  { path: '', component: MyQuizzesComponent,canActivate:[LoggedIn]},
  { path: ':roomId', component: RoomDetailsComponent},
  { path: ':roomId/start', component: RoomStartComponent},
  { path: ':roomId/edit', component: EditRoomComponent},
  { path: 'create', component: CreateQuizzComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [LoggedIn]
})
export class RoomManageRoutingModule { }
