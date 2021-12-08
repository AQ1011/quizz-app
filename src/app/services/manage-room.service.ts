import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RxStompService } from '@stomp/ng2-stompjs';
import { Observable } from 'rxjs';
import { enviroment } from '../enviroment';
import { TokenStorageService } from './token-storage.service';

const URI = enviroment.apiURL + 'api/';
  
@Injectable({
  providedIn: 'root'
})
export class ManageRoomService {

  constructor(private stompService: RxStompService,
    private http: HttpClient) { }

  
  openRoom(roomId: string): Observable<any> {
    return this.http.post( enviroment.apiURL + 'openroom',{},{params: {id: roomId}, responseType: 'text'});
  } 

  startRoom(roomId: string): void {
    return this.stompService.publish({ destination: '/app/getquiz/' + roomId});
  }

  getRooms(): Observable<any> {
    return this.http.get(URI + 'getrooms');
  }

  createRoom(room: any): Observable<any> {
    return this.http.post(URI + 'createRoom',room, { responseType: 'text' });
  }

  editRoom(room: any): Observable<any> {
    return this.http.post(URI + 'editRoom',room, { responseType: 'text' });
  }

  getRoom(roomId: string) {
    return this.http.get(URI + 'getroom', {params: { id: roomId }});
  }

  deleteRoom(roomId: string) {
    return this.http.post(enviroment.apiURL  + 'deleteroom',{},{params: {id: roomId}, responseType: 'text'});
  }

  closeRoom(roomId: string) {
    return this.http.post(enviroment.apiURL + 'closeroom',{},{params: {id: roomId}, responseType: 'text'});
  }
}
