import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RxStompService } from '@stomp/ng2-stompjs';
import { RoomService } from '../services/room.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  roomId: string;
  name: string;

  constructor(private router: Router,
    private roomService: RoomService) { }

  ngOnInit(): void {
    this.roomId = "";
  }

  navigateToRoom() {
    this.name = 'BigFish';
    console.log('gogo' + this.roomId);
    if(this.roomId){
      this.roomService.joinRoom(this.roomId, this.name).subscribe(
        res => {
          this.router.navigate(['/room/', {
            roomId: this.roomId,
            name: this.name
          }]);
        },
        error => {
          console.log(error);
        }
      )
    }
  }
}
