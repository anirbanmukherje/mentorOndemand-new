import { Component, OnInit } from '@angular/core';
import{AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-mentor-login',
  templateUrl: './mentor-login.component.html',
  styleUrls: ['./mentor-login.component.scss']
})
export class MentorLoginComponent implements OnInit {

  constructor(private _auth:AuthService,private _router:Router) { }
  

  loginUserData={"Role":2}
  ngOnInit() {
  }
loginMentor(){
  this._auth.loginMentor(this.loginUserData)
  .subscribe(
    res =>{
      console.log('......'+res);
    localStorage.setItem('token',res.key)
    localStorage.setItem('userEmail',res.email)
    this._router.navigate(['/MentorBody'])
      },
      err =>{console.log(err);
        alert(err.error.message);
       })
  
  

}
}

