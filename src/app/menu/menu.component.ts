import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from '../services/token-storage.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

    isHome: boolean;
    constructor(
        private router: Router,
        private token: TokenStorageService) { }
    @Input() opacity: number;
    ngOnInit(): void {
        if(this.router.url === '/home')
            this.isHome = true;
        else  
            this.isHome = false;
    }

    isLoggedIn(): boolean {
        return this.token.getToken() ? true : false;
    }
}
