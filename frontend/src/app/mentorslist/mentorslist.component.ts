import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mentorslist',
  templateUrl: './mentorslist.component.html',
  styleUrls: ['./mentorslist.component.scss']
})
export class MentorslistComponent implements OnInit {

  mentorsList =[]
  constructor(private _eventService: EventService,
    private _router: Router) { }

  ngOnInit() {
    this._eventService.getMentorListDetails()
      .subscribe(
        res => this.mentorsList = res,
        err => console.log(err),
      )
  }


}
