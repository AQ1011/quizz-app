import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizzComponent } from './quizz/quizz.component';
import { HomeComponent } from './home/home.component';
import { MyQuizzesComponent } from './my-quizzes/my-quizzes/my-quizzes.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RegisterComponent } from './register/register.component';
import { CreateQuizzComponent } from './create-quizz/create-quizz.component';
import { RoomDetailsComponent } from './my-quizzes/room-details/room-details.component';

const routes: Routes = [    
  { path: 'home', component: HomeComponent },  
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: 'room', component: QuizzComponent },  
  { path: 'user', loadChildren: () => import('../app/user-page/user-page.module')
      .then(m => m.UserPageModule),},
  { path: 'create-quiz', loadChildren: () => import('../app/create-quizz/create-quizz.module')
      .then(m => m.CreateQuizzModule),},
  { path: 'my-quiz', component: MyQuizzesComponent},
  { path: 'my-quiz/:roomId', component: RoomDetailsComponent},
  { path: 'register', loadChildren: () => import('../app/login/login.module')
      .then(m => m.LoginModule),},
  { path: 'login', component: RegisterComponent},
  { path: 'admin', loadChildren: () => import('../app/admin/admin.module')
  .then(m => m.AdminModule),},
  { path: '**', component: NotFoundComponent },
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
