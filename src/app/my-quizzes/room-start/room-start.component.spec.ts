import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomStartComponent } from './room-start.component';

describe('RoomStartComponent', () => {
  let component: RoomStartComponent;
  let fixture: ComponentFixture<RoomStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomStartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
