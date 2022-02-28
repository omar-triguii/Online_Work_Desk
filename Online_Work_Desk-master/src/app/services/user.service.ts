import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { User } from '../models/user.model';
import { ProcessHTTPMsgServiceService } from './process-httpmsg-service.service';
import { baseUrl } from '../shared/baseUrl';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private url = baseUrl + 'user/';

  constructor(
    private http: HttpClient,
    private processHttpMsgService: ProcessHTTPMsgServiceService
  ) {}

  getAllUsers(): Observable<User[]> {
    return this.http
      .get<User[]>(this.url + 'getallusers')
      .pipe(catchError(this.processHttpMsgService.handleError));
  }

  /*updateUser(userId: number, user: User): Observable<User> {
    return this.http.put<User>(this.url + `update/${userId}`, user, httpOptions)
      .pipe(catchError(this.processHttpMsgService.handleError));
  }*/

  addUser(user: User): Observable<String> {
    return this.http
      .post<string>(this.url + 'register', user, httpOptions)
      .pipe(catchError(this.processHttpMsgService.handleError));
  }
  update(userId: any, body: any) {
    return this.http.put(`http://localhost:8087/user/update/${userId}`, body);
  }
}
