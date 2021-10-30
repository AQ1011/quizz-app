import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizzService {
  quizzie: any[] = [
    {
      'id':1,
      'question': 'Is shrimp wek?',
      'answers': [
        'yes',
        'absolutely',
        'ofcourse',
        'definitely'
      ],
      'correct': 'yes',
      'time': 10
    },
    {
      'id':2,
      'question': 'Gud?',
      'answers': [
        'yes',
        'absolutely',
        'ofcourse',
        'definitely'
      ],
      'correct': 'absolutely',
      'time': 30
    }
  ]
  constructor() { }
  getQuizzie(id: number, currentQuizz: number) {
    if(currentQuizz>=this.quizzie.length)
      return null;
    return this.quizzie[currentQuizz]
  }
}
