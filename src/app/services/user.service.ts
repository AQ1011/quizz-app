import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { enviroment } from '../enviroment';


const URL = enviroment.apiURL + 'api/';

@Injectable({
  providedIn: 'root'
})
export class userService {

  constructor(private http: HttpClient) { }

  getProfile() {
    return this.http.get(URL + 'profile')
  }

  editProfile(user: any) {
    return this.http.post(URL + 'edit-profile',{ userMap: user})
  }
  
  changePass(user: any) {
    return this.http.post(URL + 'change-pass',{ newpass: user.newpass, oldpass: user.oldpass}, {responseType: 'text'})
  }
}
