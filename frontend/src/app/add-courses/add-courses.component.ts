import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router'


@Component({
  selector: 'app-add-courses',
  templateUrl: './add-courses.component.html',
  styleUrls: ['./add-courses.component.scss']
})
export class AddCoursesComponent implements OnInit {

  courseAddData:any = {}
  constructor(private _auth: AuthService,
    private _router: Router) { }

    ngOnInit() {

     
    }
    registerCourses() {
     this._auth.registerCourses(this.courseAddData)
      .subscribe(
        res => {
        this._router.navigate(['/AdminBody'])
        },
        err => console.log(err)
      ) 
    
      
  
  }
  

}
