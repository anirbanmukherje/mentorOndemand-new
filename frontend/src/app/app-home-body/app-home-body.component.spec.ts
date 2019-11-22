import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppHomeBodyComponent } from './app-home-body.component';

describe('AppHomeBodyComponent', () => {
  let component: AppHomeBodyComponent;
  let fixture: ComponentFixture<AppHomeBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppHomeBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppHomeBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
