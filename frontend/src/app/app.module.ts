import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FooterComponent } from './footer/footer.component';
import { SignupComponent } from './signup/signup.component';
import { StudentLoginComponent } from './student-login/student-login.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { MentorLoginComponent } from './mentor-login/mentor-login.component';
import { MentorsignupComponent } from './mentorsignup/mentorsignup.component';
import { AppHomeBodyComponent } from './app-home-body/app-home-body.component';
import { ContactComponent } from './contact/contact.component';
import { CoursesComponent } from './courses/courses.component';
import{FormsModule} from '@angular/forms';
import{HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http';
import{AuthService} from './auth.service';
import{EventService} from './event.service';
import { EventsComponent } from './events/events.component';
import { SpecialeventComponent } from './specialevent/specialevent.component';
import { AuthGuard } from './auth.guard';
import{TokenInterceptorService} from './token-interceptor.service';
import { NavmentorComponent } from './navmentor/navmentor.component';
import { MycourseComponent } from './mycourse/mycourse.component';
import { NavbarAdminComponent } from './navbar-admin/navbar-admin.component';
import { AdminBodyComponent } from './admin-body/admin-body.component';
import { AddCoursesComponent } from './add-courses/add-courses.component';
import { EditCourseComponent } from './edit-course/edit-course.component';
import { DeleteCourseComponent } from './delete-course/delete-course.component';
import { MentorProfileComponent } from './mentor-profile/mentor-profile.component';
import { MentorsListComponent } from './mentors-list/mentors-list.component';
import { StudentsListComponent } from './students-list/students-list.component';
import { StudentProfileComponent } from './student-profile/student-profile.component';
import { StudentNavComponent } from './student-nav/student-nav.component';
import { OngoingCoursesComponent } from './ongoing-courses/ongoing-courses.component';
import { EnrolledStudentComponent } from './enrolled-student/enrolled-student.component';
import { MentorslistComponent } from './mentorslist/mentorslist.component';

@NgModule({
  declarations: [
    AppComponent,
  
    FooterComponent,
    SignupComponent,
    StudentLoginComponent,
    AdminLoginComponent,
    MentorLoginComponent,
    MentorsignupComponent,
  
    AppHomeBodyComponent,
  
    ContactComponent,
  
    CoursesComponent,
  
    EventsComponent,
  
    SpecialeventComponent,
  
    NavmentorComponent,
  
    MycourseComponent,
  
    NavbarAdminComponent,
  
    AdminBodyComponent,
  
    AddCoursesComponent,
  
    EditCourseComponent,
  
    DeleteCourseComponent,
  
    MentorProfileComponent,
  
    MentorsListComponent,
  
    StudentsListComponent,
  
    StudentProfileComponent,
  
    StudentNavComponent,
  
    OngoingCoursesComponent,
  
    EnrolledStudentComponent,
  
    MentorslistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  
  ],
  providers: [AuthService,EventService,AuthGuard,
    {
      provide:HTTP_INTERCEPTORS,
      useClass:TokenInterceptorService,
      multi:true
  }],   
  bootstrap: [AppComponent]
})
export class AppModule { }
