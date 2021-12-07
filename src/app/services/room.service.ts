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

  joinRoom(roomId: string, name: string):Observable<any> {
    return this.http.post(URI + 'getin', { name: name }, { params: { pin: roomId } , responseType: 'text'});
  }
  
  sendAnswer(roomPin: string, name: string, quizId:string, answerId: string ): Observable<any> {
    return this.http.post(URI + 'submitAnswer', 
      { 
        name: name, 
        quizId: quizId, 
        answerId: answerId 
      },
      { 
        params: { pin: roomPin } , 
        responseType: 'text'
      });
  }

  getQuiz(pin: string): Observable<any> {
    return this.stompService.watch({ destination: '/doquiz/room/' + pin});
  }

  getScore(pin: string): Observable<IMessage> {
    return this.stompService.watch({ destination: '/doquiz/score/' + pin});
  }

  endQuiz(pin: string): Observable<IMessage> {    
    return this.stompService.watch({ destination: '/doquiz/message/' + pin});
  }

}
