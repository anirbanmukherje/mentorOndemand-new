import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { EventService } from '../event.service';

@Component({
  selector: 'app-mentor-profile',
  templateUrl: './mentor-profile.component.html',
  styleUrls: ['./mentor-profile.component.scss']
})
export class MentorProfileComponent implements OnInit {

  mentorUpdateData:any = {}
  constructor(private _auth: AuthService,private _eventService: EventService,
    private _router: Router) { }



    ngOnInit() {
      this._eventService.getMentorDetails(this._auth.loggedInUserName())
        .subscribe(
          res => {
            this.mentorUpdateData = res;
            console.log(this.mentorUpdateData)
          },
          err => console.log(err)
        )
    }
  
   editMentorDetails(mentorId){
      this._eventService.editMentorDetails(mentorId,this.mentorUpdateData)
      .subscribe(
        res => {
        console.log('updated mentor data ' + JSON.stringify(res));
         this._router.navigate(['/MentorBody'])
        },
        err => console.log(err)
      ) 
    }
  
  
  }
