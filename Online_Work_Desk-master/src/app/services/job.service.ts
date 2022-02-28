import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { baseUrl } from '../shared/baseUrl';
import { ProcessHTTPMsgServiceService } from './process-httpmsg-service.service';
import { Job } from "../models/job.model";
import { Application } from '../application.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  }),
};

const httpOptionsFormData = {
  headers: new HttpHeaders({
    'Content-Type': 'multipart/form-data'
  }),
};

@Injectable({
  providedIn: 'root'
})
export class JobService {

  private url = baseUrl + 'user/'

  constructor(private http: HttpClient,
    private processHttpMsgService: ProcessHTTPMsgServiceService) { }

  getAllJobs(): Observable<Job[]> {
    return this.http.get<Job[]>(this.url + 'getalljobs')
      .pipe(catchError(this.processHttpMsgService.handleError));
  }

  addJob(userId: number, job: Job): Observable<any> {
    job.owner = userId;
    return this.http.post<any>(this.url + `${userId}/addJob`, job, httpOptions)
      .pipe(catchError(this.processHttpMsgService.handleError));
  }

  getJobsPostedByUser(userId: number): Observable<Job[]> {
    return this.http.get<Job[]>(this.url + `${userId}/jobsposted`)
      .pipe(catchError(this.processHttpMsgService.handleError));
  }

  uploadImage(image: File) {
    const formData = new FormData();

    formData.append("file", image);

    return this.http.post(baseUrl + 'upload', formData);
  }

  seeapplicationsforthisjob(jobId:number): Observable<Application[]> {
    return this.http.get<Application[]>(this.url + `${jobId}/getapplicationsbyjob`)
  }
}
