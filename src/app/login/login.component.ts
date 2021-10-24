import { Component, OnInit } from "@angular/core";
import { AuthServiceService } from "../services/auth-service.service";
import { TokenStorageService } from "../services/token-storage.service";

@Component({
  selector: "app-login",
  templateUrl: "login.component.html",
  styleUrls: ["login.component.scss"]
})
export class LoginComponent implements OnInit {
  
  form: any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthServiceService, private tokenService: TokenStorageService) {}

  ngOnInit() {
  }

  onSubmit(): void {
    console.log(this.form);
    //Call API
    // this.authService.register(this.form).subscribe(
    //   data => {
    //     console.log(data);
    //     this.isSuccessful = true;
    //     this.isSignUpFailed = false;
    //   },
    //   err => {
    //     this.errorMessage = err.error.message;
    //     this.isSignUpFailed = true;
    //   }
    // );
  }
}
