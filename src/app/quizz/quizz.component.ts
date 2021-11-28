import { variable } from '@angular/compiler/src/output/output_ast';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RxStompService } from '@stomp/ng2-stompjs';
import { RoomService } from 'src/app/services/room.service';
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.scss']
})
export class QuizzComponent implements OnInit {

  myQuizz: any;
  allQuizzes: any[];
  roomId: string;
  currentQuizz: number;
  quizzEnd: boolean;
  timer: any;
  countdown: any;
  timeLeft: number;
  choosenAnswer: string;

  constructor(private roomService: RoomService, 
    private route: ActivatedRoute,
    private rxStompService: RxStompService) { 

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.roomId = params.get('roomId');
    });
    // this.currentQuizz = 0;
    // this.myQuizz = this.quizzService.getQuizzie(this.quizzId,this.currentQuizz);
    // this.timeOut(this.myQuizz.time);
    this.quizzEnd = false;
    // console.log('room ID: ' + this.roomId);
    this.roomService.getQuiz(this.roomId).subscribe(
      (message: any) => {
        this.myQuizz = JSON.parse(message.body);
        console.log(message.body);
        console.log(JSON.parse(message.body).content);
      }
    )
    
    this.roomService.endQuiz(this.roomId).subscribe(
      (message: any) => {
        this.quizzEnd = true;
      }
    )
    // this.rxStompService.publish({ destination: '/app/getquiz/tvOlZq5Cw', body: "" });
    // this.rxStompService.watch('/doquiz/room/tvOlZq5Cw').subscribe((message: any) => {
    //   this.myQuizz = JSON.parse(message.body);
    //   console.log(message.body);
    //   console.log(JSON.parse(message.body).content);
    // });
    
  }

  startQuiz() {
    // this.stompClient.send("/app/getquiz" + "/tvOlZq5Cw", {}, JSON.stringify(""))
    // this.rxStompService.publish({ destination: '/getquiz/'+this.roomId, body: "" });
    // this.roomService.openRoom(this.roomId).subscribe(res => {
    //   console.log(res);
    // });
    this.roomService.startRoom(this.roomId);
  }

  choose(answer: string) {
    this.choosenAnswer = answer;
    // clearInterval(this.countdown);
    // this.nextQuizz();
    // this.rxStompService.publish({ destination: '/app/getquiz/'+this.roomId, body: answer });
  }

  timeOut(time: number) {
    // this.timeLeft = this.myQuizz.time;
    // this.countdown = setInterval(()=> {
    //   this.timeLeft = this.timeLeft - 1;;
    //   if(this.timeLeft == 0) {
    //     clearInterval();
    //     this.nextQuizz();
    //   }
    // }, 1000)
  }

  // nextQuizz() {
  //   clearInterval(this.countdown);
  //   this.choosenAnswer = null;
  //   this.currentQuizz++;
  //   this.myQuizz = this.quizzService.getQuizzie(this.roomId,this.currentQuizz);
  //   if(this.myQuizz === null) {
  //     this.quizzEnd = true;
  //   }
  //   this.timeOut(this.myQuizz.time);
  //   console.log(this.myQuizz);
  // }

}
