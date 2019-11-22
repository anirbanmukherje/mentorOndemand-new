import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{AuthService} from '../auth.service';

@Component({
  selector: 'app-navbar-admin',
  templateUrl: './navbar-admin.component.html',
  styleUrls: ['./navbar-admin.component.scss']
})
export class NavbarAdminComponent implements OnInit {

  constructor(public router: Router,public _auth:AuthService) { }

  ngOnInit() {
  }

}
