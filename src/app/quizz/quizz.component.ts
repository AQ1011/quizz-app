import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RoomService } from 'src/app/services/room.service';
import  ObjectID from 'bson-objectid';

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
  countdown: any;
  timeLeft: number;
  choosenAnswer: string;

  constructor(private roomService: RoomService, 
    private route: ActivatedRoute) { 

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.roomId = params.get('roomId');
      this.userName = params.get('name');
    });
    this.quizzEnd = false;
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
  }

  log() {
    const ob = new ObjectID(1636554391)
    console.log(ob.toHexString());
  }

  objectIdFromDate(timeStamp: any) {
    return Math.floor(timeStamp / 1000).toString(16) + "0000000000000000";
  };

  startQuiz() {
    this.roomService.startRoom(this.roomId);
  }

  choose(answer: string) {
    this.roomService.sendAnswer(this.roomId, this.userName, this.roomId, answer).subscribe();
  }

  timeOut(time: number) {

  }
}
