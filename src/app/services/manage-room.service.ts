import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';

const URI = 'http://localhost:8080/api/';
  
@Injectable({
  providedIn: 'root'
})
export class ManageRoomService {

  constructor(private http: HttpClient) { }

  getRooms(): Observable<any> {
    return this.http.get(URI + 'getrooms');
  }
  createRoom(room: any): Observable<any> {
    return this.http.post(URI + 'createRoom',room);
  }
  getRoom(roomId: string) {
    return this.http.get(URI + 'getroom', {params: { id: roomId }});
  }
}
