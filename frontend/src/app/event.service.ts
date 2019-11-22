import { Injectable } from '@angular/core';
import{HttpClient,HttpHeaders} from '@angular/common/http';

const httpOptions1 = {
  headers: new HttpHeaders({
    "Content-Type": "application/json",
    "Authorization": "Bearer " + localStorage.getItem("token")
  })
};

@Injectable({
  providedIn: 'root'
})
export class EventService {

  public _setCourse:any;
  private _eventsUrl="http://localhost:44319/api/events";
  private _specialEventsUrl="https://localhost:44319/api/enrolledcourse/ListOfCourse/";
  private _mycourses="https://localhost:44319/api/course";
  private _updateCourseUrl = "https://localhost:44319/api/course/";
  private _deleteCourseUrl = "https://localhost:44319/api/course/";
  private _getUserListUrlAdminFetch="https://localhost:44319/api/course/mentorsList"
  private _getStudentListUrlAdminFetch="https://localhost:44319/api/course/studentsList"
  private _updateMentorUrl = "https://localhost:44319/api/course/mentorProfile/";
  private _searchCourseUrl="https://localhost:44319/api/course/search/"
  private _mentorProfileUrl = "https://localhost:44319/api/course/mentorProfile/";
  private _studentProfileUrl = "https://localhost:44319/api/course/studentProfile/";
  private _updateStudentUrl = "https://localhost:44319/api/course/studentProfile/";
  private _updateEnrolledCourseUrl = "https://localhost:44319/api/enrolledcourse/ChangeEnrolledCourseStatus/";
  private _coursesUrl = "https://localhost:44319/api/enrolledcourse/ListOfCourseMentor/";
  private _getMentorListUrl = "https://localhost:44319/api/enrolledcourse";
  private _specialEventsUrlAddCourse = "https://localhost:44319/api/enrolledcourse";

  constructor(private http:HttpClient) { }
  getEvents(){
    return this.http.get<any>(this._eventsUrl,httpOptions1)
  }
  getSpecialEvents(StudentEmail) {
    return this.http.get<any>(this._specialEventsUrl+StudentEmail,httpOptions1)
  }
  getCourses(){
    return this.http.get<any>(this._mycourses,httpOptions1) 
  }
  editCourses(editField,course) {
    return this.http.put<any>(this._updateCourseUrl+editField,course,httpOptions1)
  }
  deleteCourse(deleteField){
    return this.http.delete<any>(this._deleteCourseUrl+deleteField,httpOptions1)
  }
  setCourse(course){
    this._setCourse = course;
    
  }
  getCourses1(MentorEmail) {
    return this.http.get<any>(this._coursesUrl+MentorEmail,httpOptions1)
  }
  getCourse(){
    return (this._setCourse,httpOptions1);
  }
  getusersListAdmin() {
    return this.http.get<any>(this._getUserListUrlAdminFetch,httpOptions1)
  }

  getstudentListAdmin() {
    return this.http.get<any>(this._getStudentListUrlAdminFetch,httpOptions1)
  }
  searchResult(searchField) {
    
    return this.http.get<any>(this._searchCourseUrl+searchField,httpOptions1);
  }
  
  editMentorDetails(mentorId,mentorUpdatedData) {
    return this.http.put<any>(this._updateMentorUrl+mentorId,mentorUpdatedData,httpOptions1)
  }
  getMentorDetails(mentorEmail){
    return this.http.get<any>(this._mentorProfileUrl+mentorEmail,httpOptions1)
  }

  editStudentDetails(studentId,studentUpdatedData) {
    return this.http.put<any>(this._updateStudentUrl+studentId,studentUpdatedData,httpOptions1)
  }
  getStudentDetails(studentEmail){
    return this.http.get<any>(this._studentProfileUrl+studentEmail,httpOptions1)
  }
  updateEnrolledCourse(updateCourseId,updateCourseUserName,course) {
    return this.http.put<any>(this._updateEnrolledCourseUrl+updateCourseId+'/'+updateCourseUserName,course,httpOptions1)
  }
  enrollCourse(user) {
    return this.http.post<any>(this._specialEventsUrlAddCourse, user,httpOptions1)
  }
  getMentorListDetails() {
    return this.http.get<any>(this._getMentorListUrl,httpOptions1)
  }

}

