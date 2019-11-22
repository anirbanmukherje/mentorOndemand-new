import { Component, OnInit } from '@angular/core';
import {EventService} from '../event.service';
import{Router} from '@angular/router';
import{AuthService} from '../auth.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})

export class CoursesComponent implements OnInit {
  events=[]
  searchedCourse: any;
  searchedCourseValues:any = [];
  errorServerMessageEvents: String = null;
  constructor(private _eventservice:EventService,
    private _router:Router,private _authService:AuthService) { }

  ngOnInit() {
    this._eventservice.getCourses()
    .subscribe(
      res => this.events = res,
      err => console.log(err),
    )
  }
  searchCourse (searchedCourse) {
    this._eventservice.searchResult(searchedCourse).subscribe(
      res => {
       this.searchedCourseValues = res
       this.searchedCourseValues.header = "Searched Result"
      },
      err => {
       this.searchedCourseValues.header = " Search Does not match";
       console.log('err: ' + JSON.stringify(err));
      }
    )
 }
 enrollCourse (event, userId) {
  console.log('**********local'+userId);
  event.studentEmail= userId;
  event.status = "Requested"
  delete event.id;
  //console.log('**********'+event.Id);
  this._eventservice.enrollCourse(event)
  .subscribe(
    res => {
      //localStorage.setItem('EventToken', res.enrollEvents.keyCourse)
      this._router.navigate(['/Special'])
    } ,
    err => {
      console.log(err);
      this.errorServerMessageEvents = err.error.message;
      
    })
 }
 
}




 




