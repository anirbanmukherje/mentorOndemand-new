import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '../event.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-mentors-list',
  templateUrl: './mentors-list.component.html',
  styleUrls: ['./mentors-list.component.scss']
})
export class MentorsListComponent implements OnInit {

  constructor(private _auth: AuthService,private _eventService: EventService,
    private _router: Router) { }

    mentorslist:any ={};

  ngOnInit() {
    this.renderList()
}

renderList() {
  this._eventService.getusersListAdmin()
      .subscribe(
        res =>{ 
          this.mentorslist = res},
        err => console.log(err),
      )
}
block(id) 
  {
    this._auth.blockById(id).subscribe(
      res => {
        this.renderList()
      },
      err => console.log(err)
    )
  }

    unBlock(id) {
      this._auth.unBlockById(id).subscribe(
        res => {
          this.renderList()
        },
        err => console.log(err)
      )
    }


}
