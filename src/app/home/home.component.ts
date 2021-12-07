import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RxStompService } from '@stomp/ng2-stompjs';
import { ToastrService } from 'ngx-toastr';
import { RoomService } from '../services/room.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  roomId: string;
  name: string;
  loading: boolean;
  validate: string;

  constructor(private router: Router,
    private roomService: RoomService,
    private toastService: ToastrService) { }

  ngOnInit(): void {
    this.loading = false;
    this.roomId = "";
  }

  navigateToRoom() {
    if(!this.roomId)
    {
      this.validate = "Bạn phải nhập mã phòng";
      return;
    }
    if(!this.name)
    {
      this.validate = "Bạn phải nhập tên";
      return;
    }
    this.loading = true;
    if(this.roomId){
      this.roomService.joinRoom(this.roomId, this.name).subscribe(
        res => {
          this.loading = false;
          this.router.navigate(['/room/', {
            roomId: this.roomId,
            name: JSON.parse(res).name
          }]);
        },
        error => {
          this.loading = false;
          this.toastService.error('Phòng không tồn tại hoặc chưa mở');
        }
      )
    }
    this.validate = null;
  }
}
