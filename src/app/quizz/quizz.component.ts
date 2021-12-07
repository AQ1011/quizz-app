import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RoomService } from 'src/app/services/room.service';
import { Answer } from 'src/model/Room';
import { IMessage } from '@stomp/stompjs';

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.scss']
})
export class QuizzComponent implements OnInit {

  userName: string;
  myQuizz: any;
  allQuizzes: any[];
  roomId: string;
  quizzEnd: boolean;
  timer: any;
  countdown: number;
  timeLeft: number;
  choosenAnswer: string;

  constructor(private roomService: RoomService, 
    private route: ActivatedRoute) { 

  }

  ngOnInit(): void {
    this.countdown = 0;
    this.route.paramMap.subscribe(params => {
      this.roomId = params.get('roomId');
      this.userName = params.get('name');
    });
    this.quizzEnd = false;
    this.roomService.getQuiz(this.roomId).subscribe(
      (message: any) => {
        try {
          console.log(message);
          this.myQuizz = JSON.parse(message.body);
          console.log(JSON.parse(message._body));
          if(JSON.parse(message._body).status){
            console.log('okokokokok')
            this.countdown = 3;
            var t = setInterval(() => {
              if(this.countdown > 0)
                this.countdown -= 1;
              else 
                clearInterval()
            },1000)
          }
          
        } catch (e){
          console.log(e);
        }
      }
    )
    
    this.roomService.endQuiz(this.roomId).subscribe(
      (message: any) => {
        this.quizzEnd = true;
        console.log(message);
      }
    )    
    this.roomService.getScore(this.roomId).subscribe(
      (message: IMessage) => {
        console.log('from score: ')
        console.log(message.body);
      }
    )    
  }

  objectIdFromDate(timeStamp: any) {
    return Math.floor(timeStamp / 1000).toString(16) + "0000000000000000";
  };

  choose(answer: Answer) {
    if(this.choosenAnswer === answer.id)
      return;
    this.choosenAnswer = answer.id;
    this.roomService.sendAnswer(this.roomId, this.userName, this.myQuizz.id, answer.id).subscribe(
      (message: IMessage) => {
        console.log(message.body);
      },
      error => {
        console.log(error)
      }
    );
  }

  timeOut(time: number) {

  }
}
