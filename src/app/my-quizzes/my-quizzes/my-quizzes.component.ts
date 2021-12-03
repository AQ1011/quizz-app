import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ManageRoomService } from 'src/app/services/manage-room.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-my-quizzes',
  templateUrl: './my-quizzes.component.html',
  styleUrls: ['./my-quizzes.component.scss']
})
export class MyQuizzesComponent implements OnInit {

  myQuizes: any;
  myRooms: any;
  constructor(private roomService: ManageRoomService, 
    private tokenService: TokenStorageService,
    private router: Router) { }

  ngOnInit(): void {
    if(!this.tokenService.getUser())
      this.router.navigate(['/']);
    this.roomService.getRooms().subscribe(
      data => {
        this.myRooms = data;
      },
      error => {
        console.log('error');
        console.log(error.error);
      }
    );
  }

}
