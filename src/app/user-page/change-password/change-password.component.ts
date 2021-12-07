import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { userService } from 'src/app/services/user.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  passForm: FormGroup;
  oldpass: FormControl;
  newpass: FormControl;
  repass: FormControl;
  changeError: string;

  constructor(private userService: userService,
    private fb: FormBuilder) { 
      this.oldpass = fb.control('',Validators.required);
      this.newpass = fb.control('',Validators.required);
      this.repass = fb.control('',Validators.required);
      this.passForm = new FormGroup({
        oldpass: this.oldpass,
        newpass: this.newpass,
        repass: this.repass
      });
      this.changeError='';
  }

  ngOnInit(): void {
    console.log(this.oldpass.value);
  }

  changePass() {
    this.userService.changePass(this.passForm.value).subscribe(
      data => {
        alert(data);
      },
      error => {
        this.changeError = error.error;
      }
    );
  }

}
