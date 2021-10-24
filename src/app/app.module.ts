import { Input, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuizzComponent } from './components/quizz/quizz.component';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { MenuComponent } from './components/menu/menu.component';
import {InputTextModule} from 'primeng/inputtext';
import { UserPageComponent } from './user-page/user-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthServiceService } from './services/auth-service.service';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { ProfilepageComponent } from './profilepage/profilepage.component';

@NgModule({
  declarations: [
    AppComponent,
    QuizzComponent,
    MenuComponent,
    UserPageComponent,
    NotFoundComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    MenubarModule,
    InputTextModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AuthServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
