import { Component, OnInit } from '@angular/core';
import{AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-student-login',
  templateUrl: './student-login.component.html',
  styleUrls: ['./student-login.component.scss']
})
export class StudentLoginComponent implements OnInit {
   
  message: string; 

  constructor(private _auth:AuthService,private _router:Router) { }
  loginUserData={"Role":3}
  ngOnInit() {
  }
loginUser(){
  this._auth.loginUser(this.loginUserData)
  .subscribe(
    res =>{
      localStorage.setItem('token', res.key)
      localStorage.setItem('userEmail',res.email)
      this._router.navigate(['/Special'])
      },
    err =>{console.log(err);
     alert(err.error.message);
    })

}
}
