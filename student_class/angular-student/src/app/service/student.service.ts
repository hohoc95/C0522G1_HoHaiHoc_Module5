import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Student} from "../model/student";
import {Class} from "../model/class";

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private API_URL = 'http://localhost:3000/';

  constructor(private httpClient: HttpClient) {
  }

  findAllStudentSearch(nameSearch: string, classSearch: string): Observable<Student[]> {
    return this.httpClient.get<Student[]>(this.API_URL + 'student?studentName_like=' + nameSearch + '&class.className_like=' + classSearch);
  }

    findStudentSearchPaging(numberRecord: number, curPage: number, nameSearch: string, classSearch: string): Observable<Student[]> {
    return this.httpClient.get<Student[]>(this.API_URL + 'student?_page=' + curPage + '&_limit=' + numberRecord + '&studentName_like=' + nameSearch + '&class.className_like=' + classSearch);
  }

  deleteStudent(id: number): Observable<Student> {
    return this.httpClient.delete<Student>(this.API_URL + 'student/' + id);
  }

  //Detail
  detailStudent(id: number): Observable<Student> {
    return this.httpClient.get<Student>(this.API_URL + 'student/' + id);
  }

  findAllClass(): Observable<Class[]> {
    return this.httpClient.get<Class[]>(this.API_URL + 'class');
  }

  addStudent(student): Observable<Student> {
    return this.httpClient.post<Student>(this.API_URL + 'student', student);
  }

  getById(id:number):Observable<Student>{
    return this.httpClient.get<Student>(this.API_URL + 'student/' + id);
  }

  updateStudent(id:number, student:Student):Observable<Student>{
    return this.httpClient.put<Student>(this.API_URL + 'student/' + id,student);
  }

}
