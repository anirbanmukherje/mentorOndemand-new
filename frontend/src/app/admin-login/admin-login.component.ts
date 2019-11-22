import { Component, OnInit } from '@angular/core';
import{AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {

  constructor(private _auth:AuthService,private _router:Router) { }

  loginUserData={"Role":1}
  ngOnInit() {
  }
loginAdmin(){
  this._auth.loginAdmin(this.loginUserData)
  .subscribe(
    res =>{
    localStorage.setItem('token',res.key)
    localStorage.setItem('userEmail',res.email)
    this._router.navigate(['/AdminBody'])
      },
    err => {console.log(err);
      alert(err.error.message);}
      
    )

}
}

