import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ManageRoomService } from '../../services/manage-room.service';

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

  roomForm: FormGroup;

  dummyAnswer: FormArray;

  thing = [1,2,3,4];
  currentpage: number;

  constructor(private ref: ChangeDetectorRef,
    private fb:FormBuilder,
    private manageRoom: ManageRoomService,
    private toast: ToastrService,
    private router: Router) { 
      this.currentpage = 1;
      this.roomForm = this.fb.group({
        name: ['', Validators.required],
        time: [30, Validators.required],
        quizs: this.fb.array([

        ])
      });
      this.dummyAnswer = this.fb.array([
        {
          answer: ['', Validators.required],
          isCorrect: [true, Validators.required]
        },
        {
          answer: ['', Validators.required],
          isCorrect: [false, Validators.required]
        },
        {
          answer: ['', Validators.required],
          isCorrect: [false, Validators.required]
        },
        {
          answer: ['', Validators.required],
          isCorrect: [false, Validators.required]
        }
      ])
      this.addQuiz();
    }

  ngOnInit(): void {
    this.quizz = {};
    this.editName = false;
    this.quizz.editing = true
    
  }

  get quizs():FormArray {
    return this.roomForm.get('quizs') as FormArray;
  }

  newQuiz() {
    return this.fb.group({
      content: ['', Validators.required],
      alist: this.fb.array([        
        this.fb.group({
          answer: ['', Validators.required],
          isCorrect: [false, Validators.required]
        }),     
        this.fb.group({
          answer: ['', Validators.required],
          isCorrect: [false, Validators.required]
        }),     
        this.fb.group({
          answer: ['', Validators.required],
          isCorrect: [false, Validators.required]
        }),     
        this.fb.group({
          answer: ['', Validators.required],
          isCorrect: [false, Validators.required]
        }),

      ])
    })
  } 

  addQuiz() {
    this.quizs.push(this.newQuiz());
  }

  removeQuiz(i: number) {
    this.quizs.removeAt(i);
  }

  editQuizzName() {
    this.editName = true;
    setTimeout(()=>{
      this.quizzNameElement.nativeElement.focus();
    },30); 
  }

  submit() {
    console.log(this.roomForm.value);
    this.manageRoom.createRoom(this.roomForm.value).subscribe(
      data => {
        this.toast.success("Tạo thành công!");
        this.router.navigate(['/room-manage']);
      },
      error => {
        this.toast.error("Lỗi");
        console.log(error);
      }
    );
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
