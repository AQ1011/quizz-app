import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProfilepageComponent } from './profilepage/profilepage.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [  
  { path: 'user', loadChildren: () => import('../app/user-page/user-page.module')
      .then(m => m.UserPageModule),},
  { path: 'login', loadChildren: () => import('../app/login/login.module')
      .then(m => m.LoginModule),},
  { path: 'register', component: RegisterComponent},
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
