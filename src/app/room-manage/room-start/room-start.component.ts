import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ManageRoomService } from 'src/app/services/manage-room.service';
import { RoomService } from 'src/app/services/room.service';
import { Room, Score } from 'src/model/Room';
import { IMessage } from '@stomp/stompjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-room-start',
  templateUrl: './room-start.component.html',
  styleUrls: ['./room-start.component.scss']
})
export class RoomStartComponent implements OnInit {

  
  roomId: string;
  roomDetail: Room;
  guests: Score[];

  constructor(private route: ActivatedRoute,
    private manageRoom: ManageRoomService,
    private router: Router,
    private roomService: RoomService,
    private toast: ToastrService) { 
      this.guests = [];
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.roomId = params.get('roomId');
    });
    this.manageRoom.getRoom(this.roomId).subscribe(
      data => {
        console.log(data);
        this.roomDetail = data as Room;
        this.roomService.getScore(this.roomDetail.pinCode).subscribe(
          (message: IMessage) => {
            this.guests = JSON.parse(message.body) as Score[]
            this.guests.sort(this.compare);
            console.log('guest',this.guests);
          }, 
          error => {
            console.log('error',error);
          }
        )
      },
      error => {
        console.log(error + error.message);
      }
    )    
  }

  openRoom() {
    if(!this.roomDetail.isOpen)
    this.manageRoom.openRoom(this.roomId).subscribe(
      data => {    
        this.roomDetail.pinCode = data;
        this.roomDetail.isOpen = true;
      },
      error => {
        console.log(error);
      }
    )
  }

  deleteRoom() {
    this.manageRoom.deleteRoom(this.roomId).subscribe(
      data => {
        this.toast.success(data)
        this.router.navigate(['/room-manage']);
      },
      error => {
        this.toast.success('Đã xảy ra lỗi!');
      }
    );
  }

  start() {
    if(!this.roomDetail.isStart) {
      this.manageRoom.startRoom(this.roomDetail.pinCode);
      this.roomDetail.isStart = true;
    }
  }

  closeRoom() {
    this.manageRoom.closeRoom(this.roomId).subscribe(
      data => {
        this.toast.success(data);
        this.router.navigate(['/room-manage',this.roomId]);
      },
      error => {
        console.log(error);
        this.toast.error('Đã xảy ra lỗi!')
      }
    )
  }

  compare(a: any, b:any) {
    if(a.score < b.score) 
     return 1;
     if(a.score > b.score) 
      return -1;
    return 0;
  }

}
