import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { userService } from 'src/app/services/user.service';
import { User } from 'src/model/User';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  userInfo: User;
  userEdit: FormGroup;

  constructor(private userService: userService) { }

  ngOnInit(): void {
    this.userService.getProfile().subscribe(
      data => {
        this.userInfo = data as User;
      },
      error => {
        console.log(error);
      }
    )
  }

  editProfile() {
    this.userService.editProfile(this.userEdit).subscribe(
      data => {
        alert('ok');
      },
      error => {
        console.log('no ok');
      }
    );
  }

}
