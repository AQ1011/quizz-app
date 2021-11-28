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
    this.myQuizes=[
      {name: 'Quiz 1', description: 'about shrimp',thumbnail: 'https://media.sketchfab.com/models/3329b7c37a694fd19295e7f68d3471f8/thumbnails/b781a636cd9c42b88fb9e2cb1701912e/048651d65ad643f0b79b830823b49bb8.jpeg'},
      {name: 'Quiz 2', description: 'not about shrimp', thumbnail: 'https://media.sketchfab.com/models/3329b7c37a694fd19295e7f68d3471f8/thumbnails/b781a636cd9c42b88fb9e2cb1701912e/048651d65ad643f0b79b830823b49bb8.jpeg'},
      {name: 'Quiz 2', description: 'not about shrimp'},
      {name: 'Quiz 2', description: 'not about shrimp'},
      {name: 'Quiz 2', description: 'not about shrimp'},
      {name: 'Quiz 2', description: 'not about shrimp'},
      {name: 'Quiz 2', description: 'not about shrimp'},
    ]
  }

}
