import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuizzComponent } from './quizz/quizz.component';
import { MenuComponent } from './menu/menu.component';
import { UserPageComponent } from './user-page/user-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthServiceService } from './services/auth-service.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { MyQuizzesComponent } from './my-quizzes/my-quizzes/my-quizzes.component';
import { InjectableRxStompConfig, RxStompService, rxStompServiceFactory } from '@stomp/ng2-stompjs';
import { myRxStompConfig } from './my-rx-stomp.config';
import { ManageUserComponent } from './admin/manage-user/manage-user.component';
import { AuthInterceptor } from './services/http-interceptor.service';
import { RoomDetailsComponent } from './my-quizzes/room-details/room-details.component';
import { LoginComponent } from './login/login.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RoomStartComponent } from './my-quizzes/room-start/room-start.component';

@NgModule({
  declarations: [
    AppComponent,
    QuizzComponent,
    MenuComponent,
    UserPageComponent,
    NotFoundComponent,
    RegisterComponent,
    HomeComponent,
    MyQuizzesComponent,
    ManageUserComponent,
    RoomDetailsComponent,
    LoginComponent,
    RoomStartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [
    AuthServiceService,
    {
      provide: InjectableRxStompConfig,
      useValue: myRxStompConfig,
    },
    {
      provide: RxStompService,
      useFactory: rxStompServiceFactory,
      deps: [InjectableRxStompConfig],
    },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
