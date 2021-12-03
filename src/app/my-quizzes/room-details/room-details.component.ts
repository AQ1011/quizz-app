import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ManageRoomService } from 'src/app/services/manage-room.service';
import { Room } from '../../../model/Room';

@Component({
  selector: 'app-room-details',
  templateUrl: './room-details.component.html',
  styleUrls: ['./room-details.component.scss']
})
export class RoomDetailsComponent implements OnInit {

  roomId: string;
  roomDetail: Room;

  constructor(private route: ActivatedRoute,
    private manageRoom: ManageRoomService) { 
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.roomId = params.get('roomId');
    });
    this.manageRoom.getRoom(this.roomId).subscribe(
      data => {
        console.log(data);
        this.roomDetail = data as Room;
      },
      error => {
        console.log('wek room: ' + error.message);
      }
    )
  }



}
