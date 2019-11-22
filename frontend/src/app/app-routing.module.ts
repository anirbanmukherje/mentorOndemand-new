import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { StudentLoginComponent } from './student-login/student-login.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { MentorLoginComponent } from './mentor-login/mentor-login.component';
import { MentorsignupComponent } from './mentorsignup/mentorsignup.component';
import { AppHomeBodyComponent } from './app-home-body/app-home-body.component';
import { ContactComponent } from './contact/contact.component';
import { CoursesComponent } from './courses/courses.component';
import { AuthGuard } from './auth.guard';
import { SpecialeventComponent } from './specialevent/specialevent.component';
import { NavmentorComponent } from './navmentor/navmentor.component';
import { MycourseComponent } from './mycourse/mycourse.component';
import { AdminBodyComponent } from './admin-body/admin-body.component';
import { NavbarAdminComponent } from './navbar-admin/navbar-admin.component';
import { EditCourseComponent } from './edit-course/edit-course.component';
import { DeleteCourseComponent } from './delete-course/delete-course.component';
import { AddCoursesComponent } from './add-courses/add-courses.component';
import { MentorProfileComponent } from './mentor-profile/mentor-profile.component';
import { MentorsListComponent } from './mentors-list/mentors-list.component';
import { StudentsListComponent } from './students-list/students-list.component';
import { StudentProfileComponent } from './student-profile/student-profile.component';
import { EnrolledStudentComponent } from './enrolled-student/enrolled-student.component';
import { MentorslistComponent } from './mentorslist/mentorslist.component';

const routes: Routes = [
  {path:'mentorLogIn', component:MentorLoginComponent},
  {path:'studentLogIn', component:StudentLoginComponent},
  {path:'adminLogIn', component:AdminLoginComponent},
  {path:'studentSignUp', component:SignupComponent},
  {path:'mentorSignup', component:MentorsignupComponent},
  {path:'Contact', component:ContactComponent},
  {path:'Home', component:AppHomeBodyComponent},
  {path:'Courses', component:CoursesComponent},
  {path:'NavMentor', component:NavmentorComponent},
  {path:'NavAdmin', component:NavbarAdminComponent},
  {path:'MentorBody', component:MycourseComponent},
  {path:'AdminBody', component:AdminBodyComponent},
  {path:'AddCourse', component:AddCoursesComponent},
  {path:'EditCourse', component:EditCourseComponent },
  {path:'DeleteCourse', component: DeleteCourseComponent},
  {path:'MentorProfile', component: MentorProfileComponent},
  {path:'MentorsList', component: MentorsListComponent },
  {path:'StudentsList', component: StudentsListComponent },
  {path:'EnrolledStudents', component: EnrolledStudentComponent },
  {path:'StudentsProfile', component: StudentProfileComponent },
  {path:'Mentorslist', component: MentorslistComponent },
  {path:'Special', component:SpecialeventComponent,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

