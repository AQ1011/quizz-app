import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ManageRoomService } from 'src/app/services/manage-room.service';
import { RoomService } from 'src/app/services/room.service';
import { Room, Score } from '../../model/Room';
import { IMessage } from '@stomp/stompjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-room-details',
  templateUrl: './room-details.component.html',
  styleUrls: ['./room-details.component.scss']
})
export class RoomDetailsComponent implements OnInit {

  roomId: string;
  roomDetail: Room;

  constructor(private route: ActivatedRoute,
    private manageRoom: ManageRoomService,
    private router: Router,
    private roomService: RoomService,
    private toast: ToastrService) { 
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

  start() {
    if(!this.roomDetail.isStart) {
      this.manageRoom.startRoom(this.roomDetail.pinCode);
      this.roomDetail.isStart = true;
      this.router.navigate(['start'], {relativeTo: this.route});
    }
  }

  openRoom() {
    if(!this.roomDetail.isOpen)
    this.manageRoom.openRoom(this.roomId).subscribe(
      data => {    
        this.roomDetail.pinCode = data;
        this.roomDetail.isOpen = true;
        this.router.navigate(['start'], {relativeTo: this.route});
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


}
