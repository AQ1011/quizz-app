import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'quizz-app';
  quizz= {
    question: "Shrimp is wek",
    answers: [
      "true",
      "very true",
      "absolutely",
      "absolutely",
    ]
  }
}
