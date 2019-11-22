import { Component, OnInit } from '@angular/core';
import {EventService} from '../event.service';
import{Router} from '@angular/router';
import{AuthService} from '../auth.service';

@Component({
  selector: 'app-mycourse',
  templateUrl: './mycourse.component.html',
  styleUrls: ['./mycourse.component.scss']
})
export class MycourseComponent implements OnInit {

  courses = []
  constructor(private _eventService: EventService, private _authService: AuthService,
    private _router: Router) { }

  ngOnInit() {
    this._eventService.getCourses()
    .subscribe(
      res => this.courses = res,
      err => console.log(err),
    )
  }
}
