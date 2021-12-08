import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizzComponent } from './do-quiz/quizz.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { LoggedIn } from './services/loggedIn';
import { RoomManageModule } from './room-manage/room-manage.module';

const routes: Routes = [    
  { path: 'home', component: HomeComponent },  
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: 'room', component: QuizzComponent },  
  { path: 'user', loadChildren: () => import('../app/user-page/user-page.module')
      .then(m => m.UserPageModule),},
  { path: 'room-manage', loadChildren: () => import('./room-manage/room-manage.module')
      .then(m => m.RoomManageModule),},
  { path: 'login', component: RegisterComponent},
  { path: 'register', component: LoginComponent},
  { path: 'admin', loadChildren: () => import('../app/admin/admin.module')
  .then(m => m.AdminModule), canActivate: [LoggedIn]},
  { path: '**', component: NotFoundComponent },
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [LoggedIn]
})
export class AppRoutingModule { }
