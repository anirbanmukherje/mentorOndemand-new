import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { EventService } from '../event.service';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.scss']
})
export class StudentsListComponent implements OnInit {

  constructor(private _auth: AuthService,private _eventService: EventService,
    private _router: Router) { }

    studentslist:any ={}

    ngOnInit() {
      this.renderList()
  }
  
  renderList() {
    this._eventService.getstudentListAdmin()
        .subscribe(
          res =>{ 
            this.studentslist = res},
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
