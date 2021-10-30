import { variable } from '@angular/compiler/src/output/output_ast';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizzService } from 'src/app/services/quizz.service';

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.scss']
})
export class QuizzComponent implements OnInit {

  @Input() myQuizz: any;
  allQuizzes: any[];
  quizzId: number;
  currentQuizz: number;
  quizzEnd: boolean;
  timer: any;
  countdown: any;
  timeLeft: number;
  choosenAnswer: string;

  constructor(private quizzService: QuizzService, 
    private route: ActivatedRoute,
    private ref: ChangeDetectorRef) { 

  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.quizzId = params['quizzId'];
    });
    this.currentQuizz = 0;
    this.myQuizz = this.quizzService.getQuizzie(this.quizzId,this.currentQuizz);
    this.timeOut(this.myQuizz.time);
    this.quizzEnd = false;
  }

  choose(answer: string) {
    this.choosenAnswer = answer;
    // clearInterval(this.countdown);
    // this.nextQuizz();
  }

  timeOut(time: number) {
    this.timeLeft = this.myQuizz.time;
    this.countdown = setInterval(()=> {
      this.timeLeft = this.timeLeft - 1;;
      if(this.timeLeft == 0) {
        clearInterval();
        this.nextQuizz();
      }
    }, 1000)
  }

  nextQuizz() {
    clearInterval(this.countdown);
    this.choosenAnswer = null;
    this.currentQuizz++;
    this.myQuizz = this.quizzService.getQuizzie(this.quizzId,this.currentQuizz);
    if(this.myQuizz === null) {
      this.quizzEnd = true;
    }
    this.timeOut(this.myQuizz.time);
    console.log(this.myQuizz);
  }
}
