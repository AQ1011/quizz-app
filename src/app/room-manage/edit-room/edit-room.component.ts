import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ManageRoomService } from 'src/app/services/manage-room.service';
import { Room } from 'src/app/model/Room';

@Component({
  selector: 'app-edit-room',
  templateUrl: './edit-room.component.html',
  styleUrls: ['./edit-room.component.scss']
})
export class EditRoomComponent implements OnInit {
  @ViewChild('editQuizzNameInput') quizzNameElement: ElementRef;
  quizz: any;
  temp: any;
  editName: boolean;
  roomId: string;
  roomForm: FormGroup;

  dummyAnswer: FormArray;

  thing = [1,2,3,4];
  currentpage: number;

  constructor(private ref: ChangeDetectorRef,
    private fb:FormBuilder,
    private manageRoom: ManageRoomService,
    private route: ActivatedRoute,
    private router: Router,
    private toast: ToastrService) { 

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
    this.route.paramMap.subscribe(params => {
      this.roomId = params.get('roomId');
    });
    this.manageRoom.getRoom(this.roomId).subscribe(
      (data: any) => {
        const room = data as Room;
        room.quizs.forEach((quiz:any,index) => {
            this.addQuiz()
        });
        this.removeQuiz(room.quizs.length);
        this.roomForm.patchValue(data as Room)
        console.log(this.roomForm.value);
        this.quizz.name = data.name;
        this.quizz.time = data.time;
      },
      error => {
        console.log('error',error);
      }
    )
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
    var roomValue = this.roomForm.value as Room;
    roomValue.id = this.roomId;
    console.log(roomValue);
    this.manageRoom.createRoom(this.roomForm.value).subscribe(
      data => {
        this.toast.success('Thành công')
        this.router.navigate(['room-manage',this.roomId]);
      },
      error => {
        this.toast.error('Đã xảy ra lỗi');
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
