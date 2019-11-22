import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavmentorComponent } from './navmentor.component';

describe('NavmentorComponent', () => {
  let component: NavmentorComponent;
  let fixture: ComponentFixture<NavmentorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavmentorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavmentorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
