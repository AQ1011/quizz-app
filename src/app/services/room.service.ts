import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RxStompService } from '@stomp/ng2-stompjs';
import { IMessage } from '@stomp/stompjs';
import { Observable } from 'rxjs';


const URI = 'http://127.0.0.1:8080/';

@Injectable({
  providedIn: 'root'
})
export class RoomService {  
  constructor(private stompService: RxStompService,
    private http: HttpClient) { }

  openRoom(roomId: string):Observable<any> {
    return this.http.post(URI + 'openroom',{},{params: {id: roomId}, responseType: 'text'});
  } 

  startRoom(roomId: string): void {
    return this.stompService.publish({ destination: '/app/getquiz/' + roomId});
  } 

  joinRoom(roomId: string, name: string):Observable<any> {
    return this.http.post(URI + 'getin', { name: name }, { params: { pin: roomId } , responseType: 'text'});
  }
  
  sendAnswer(roomId: string, name: string, quizId:string, answerId: string ): Observable<any> {
    return this.http.post(URI + 'submitAnswer', 
      { 
        name: name, 
        quizId: quizId, 
        answerId: answerId 
      },
      { 
        params: { pin: roomId } , 
        responseType: 'text'
      });
  }

  getQuiz(roomId: string): Observable<IMessage> {
    return this.stompService.watch({ destination: '/doquiz/room/' + roomId});
  }

  endQuiz(roomId: string): Observable<IMessage> {    
    return this.stompService.watch({ destination: '/doquiz/message/' + roomId});
  }

}
