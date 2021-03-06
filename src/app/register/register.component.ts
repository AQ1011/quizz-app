import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../services/auth-service.service';
import { TokenStorageService } from '../services/token-storage.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(private authService: AuthServiceService, 
    private tokenStorage: TokenStorageService,
    private router: Router) { }

  ngOnInit(): void {
    if(this.tokenStorage.getToken())
      this.router.navigate(['/']);
  }
  
  onSubmit(): void {
    this.authService.login(this.form).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        this.router.navigate(['/']);
        // this.reloadPage();
      },
      err => {
        this.errorMessage = err.error;
        this.isLoginFailed = true;
        console.log(err.error);
      }
    );
  }

  reloadPage(): void {
    window.location.reload();
  }
}
