import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TokenStorageService } from '../services/token-storage.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {

  constructor(private router:Router,
    private tokenService: TokenStorageService,
    private toastService: ToastrService) { }

  ngOnInit(): void {
  }

  signOut():void {
    this.tokenService.signOut();
    this.toastService.success('Đăng xuất thành công');
    this.backHome()
  }

  backHome():void {    
    if(!this.tokenService.getUser())
      this.router.navigate(['/'])
  }
}
