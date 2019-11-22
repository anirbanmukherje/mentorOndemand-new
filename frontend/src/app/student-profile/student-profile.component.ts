import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '../event.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.scss']
})
export class StudentProfileComponent implements OnInit {

  studentUpdateData:any = {}
  constructor(private _auth: AuthService,private _eventService: EventService,
    private _router: Router) { }



    ngOnInit() {
      this._eventService.getStudentDetails(this._auth.loggedInUserName())
        .subscribe(
          res => {
            this.studentUpdateData = res;
            console.log(this.studentUpdateData)
          },
          err => console.log(err)
        )
    }
  
   editStudentDetails(StudentId){
      this._eventService.editStudentDetails(StudentId,this.studentUpdateData)
      .subscribe(
        res => {
        console.log('updated student data ' + JSON.stringify(res));
         this._router.navigate(['/Courses'])
        },
        err => console.log(err)
      ) 
    }
  
  
  }

