import { Component, OnInit } from '@angular/core';
import{AuthService} from '../auth.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-mentorsignup',
  templateUrl: './mentorsignup.component.html',
  styleUrls: ['./mentorsignup.component.scss']
})
export class MentorsignupComponent implements OnInit {

  registerUserData={
    "Role" : 2
  }
  constructor(private _auth:AuthService,private _router:Router) { }
  registerMentor(){
    console.log("before passing")
    console.log(this.registerUserData)
    this._auth.registerMentor(this.registerUserData)
    .subscribe(
      res =>{
        console.log(res)
      localStorage.setItem('token',res.token)
      this._router.navigate(['/Courses'])
        },
      err => console.log(err)

    )
  }
  ngOnInit() {
  }

}

