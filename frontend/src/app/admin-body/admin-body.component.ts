import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-body',
  templateUrl: './admin-body.component.html',
  styleUrls: ['./admin-body.component.scss']
})
export class AdminBodyComponent implements OnInit {

  viewCourses ={}
  errorServerMessageCourses: String = null;
  constructor(private _eventService: EventService,
    private _router: Router) { }

  ngOnInit() {
    this._eventService.getCourses()
      .subscribe(
        res => this.viewCourses = res,
        err => console.log(err),
      )
  }

  deleteCourse (deleteCourseId) {
    this._eventService.deleteCourse(deleteCourseId)
    .subscribe(
      res => {
        this._eventService.getCourses()
    .subscribe(
      res => this.viewCourses = res,
      err => console.log(err),
    )
        this.errorServerMessageCourses = res.error.text;
      } ,
      
      err => {  this.errorServerMessageCourses = err.error.text;}
    )
    
  }

  editCourse(course){
    this._eventService.setCourse(course);
    this._router.navigate(['/EditCourse'])
  }

}



