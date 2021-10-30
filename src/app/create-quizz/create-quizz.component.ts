import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-create-quizz',
  templateUrl: './create-quizz.component.html',
  styleUrls: ['./create-quizz.component.scss']
})
export class CreateQuizzComponent implements OnInit {

  @ViewChild('editQuizzNameInput') quizzNameElement: ElementRef;
  quizz: any;
  temp: any;
  editName: boolean;
  constructor(private ref: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.quizz = {};
    this.editName = false;
    this.quizz.editing = true
    this.quizz.questions = [{'questions': '1'}];
  }

  editQuizzName() {
    this.editName = true;
    setTimeout(()=>{
      this.quizzNameElement.nativeElement.focus();
    },30); 
  }

  
  doneEditing() {
    this.editName = false;
  }
  
  addQuestion() {
    this.quizz.questions = [...this.quizz.questions, {
      question: "",
      answerA:"",
    }];
    this.ref.detectChanges();
  }

  resizeTitle() {
    this.quizzNameElement.nativeElement.style.height = 'auto';
    this.quizzNameElement.nativeElement.style.height = `${this.quizzNameElement.nativeElement.scrollHeight}px`;
  }
}
