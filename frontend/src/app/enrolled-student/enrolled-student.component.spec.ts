import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrolledStudentComponent } from './enrolled-student.component';

describe('EnrolledStudentComponent', () => {
  let component: EnrolledStudentComponent;
  let fixture: ComponentFixture<EnrolledStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnrolledStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnrolledStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
