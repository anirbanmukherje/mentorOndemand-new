import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-enrolled-student',
  templateUrl: './enrolled-student.component.html',
  styleUrls: ['./enrolled-student.component.scss']
})
export class EnrolledStudentComponent implements OnInit {

  courses = {}
  constructor(private _eventService: EventService, private _authService: AuthService,
    private _router: Router) { }

  ngOnInit() {
    console.log('********************ht'+this._authService. loggedInUserName()),
    this._eventService.getCourses1(this._authService.loggedInUserName())
    .subscribe(
      res => this.courses = res,
      err => console.log(err),
    )
  }
  updateEnrolledCourse(updateCourseId,updateCourseMentorName,course)
  {
    if(course.status == "Requested")
    {
      var r =confirm("Are you sure?\nYou  want to Accept this student?");
    if(r == true){
      this._eventService.updateEnrolledCourse(updateCourseId,updateCourseMentorName,course)
      .subscribe(
        res => {
          this._router.navigate(['/ongoingCourses'])
        } ,
        
        err => {  }
      )
    }
    else{
      alert("You rejected the student");
    }
    }
    if(course.status == "In Progress")
    {
      var r =confirm("Are you sure?\nYou want to Complete the course?");
    if(r == true){
      this._eventService.updateEnrolledCourse(updateCourseId,updateCourseMentorName,course)
      .subscribe(
        res => {
          this._router.navigate(['/ongoingCourses'])
        } ,
        
        err => {  }
      )
    }
    else{
      alert("You didn't complete the course yet");
    }
    }
    if(course.status == "Completed")
    {
      alert("The course is completed by you.")
    }
    if(course.status == "Request Accepted")
    {
      alert("Student didn't pay for this course.")
    }
    
  
  }



}
