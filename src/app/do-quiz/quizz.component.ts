import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RoomService } from 'src/app/services/room.service';
import { Answer, Score } from 'src/model/Room';
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
  quizzStart: boolean;
  timer: any;
  countdown: number;
  timeLeft: number;
  choosenAnswer: string;
  showScore: boolean;
  leaderBoard: Score[];
  personalScore: Score;

  constructor(private roomService: RoomService, 
    private route: ActivatedRoute) { 

  }

  ngOnInit(): void {
    this.countdown = 0;
    this.timeLeft = 0;
    this.route.paramMap.subscribe(params => {
      this.roomId = params.get('roomId');
      this.userName = params.get('name');
    });
    this.quizzEnd = false;
    this.quizzStart = false;
    this.roomService.getQuiz(this.roomId).subscribe(
      (message: any) => {
        try {
          this.quizzStart = true;
          this.myQuizz = JSON.parse(message.body);
          this.timeLeft = this.myQuizz.time;
          var t1 = setInterval(() => {
            if(this.timeLeft > 0)
              this.timeLeft -= 1;
            else 
              clearInterval(t1)
          },1000)
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
        this.showScore = true;
        this.leaderBoard = JSON.parse(message.body) as Score[];
        this.personalScore = this.leaderBoard.filter(score => score.name = this.userName)[0];
        this.leaderBoard.sort(this.compare);
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

  compare(a: any, b:any) {
    if(a.score < b.score) 
     return 1;
     if(a.score > b.score) 
      return -1;
    return 0;
  }
}
