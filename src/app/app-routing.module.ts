import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizzComponent } from './components/quizz/quizz.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [    
  { path: 'home', component: HomeComponent },  
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: 'quizz/:quizzId', component: QuizzComponent },  
  { path: 'user', loadChildren: () => import('../app/user-page/user-page.module')
      .then(m => m.UserPageModule),},
  { path: 'create-quizz', loadChildren: () => import('../app/create-quizz/create-quizz.module')
      .then(m => m.CreateQuizzModule),},
  { path: 'login', loadChildren: () => import('../app/login/login.module')
      .then(m => m.LoginModule),},
  { path: 'register', component: RegisterComponent},
  { path: '**', component: NotFoundComponent },
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
