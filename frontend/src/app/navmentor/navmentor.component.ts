import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{AuthService} from '../auth.service';

@Component({
  selector: 'app-navmentor',
  templateUrl: './navmentor.component.html',
  styleUrls: ['./navmentor.component.scss']
})
export class NavmentorComponent implements OnInit {

  constructor(public router: Router,private _auth:AuthService) {}

  ngOnInit() {
  }

}
