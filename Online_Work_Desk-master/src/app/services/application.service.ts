import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { Application } from '../application.model';
import { baseUrl } from '../shared/baseUrl';
import { ProcessHTTPMsgServiceService } from './process-httpmsg-service.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  }),
};

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  private url = baseUrl + 'user/';

  constructor(private http: HttpClient,
    private processHttpMsgService: ProcessHTTPMsgServiceService) { }

  getUserApplications(userId: number): Observable<Application[]> {
    return this.http.get<Application[]>(this.url + `${userId}/allapplications`)
      .pipe(catchError(this.processHttpMsgService.handleError));
  }

  postApplication(userId: number, jobId: number, application: Application): Observable<any> {
    return this.http.post<any>(this.url + `${userId}/${jobId}/addapplication`, application, httpOptions)
      .pipe(catchError(this.processHttpMsgService.handleError));
  }

  getAllApplications(): Observable<Application[]> {
    return this.http.get<Application[]>(this.url + 'getallapp')
      .pipe(catchError(this.processHttpMsgService.handleError));
  }
  getApplicationByID(jobId:number,applicationId:number){
    return this.http.get<Application>(this.url + `${jobId}/${applicationId}/viewapplication`)
  }

  confirmApplication(appId: number) {
    return this.http.get(this.url + `${appId}/confirm`);
  }
}
