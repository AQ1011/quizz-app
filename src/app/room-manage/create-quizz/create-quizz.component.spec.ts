import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateQuizzComponent } from './create-quizz.component';

describe('CreateQuizzComponent', () => {
  let component: CreateQuizzComponent;
  let fixture: ComponentFixture<CreateQuizzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateQuizzComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateQuizzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
