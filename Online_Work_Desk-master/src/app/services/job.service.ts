import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { baseUrl } from '../shared/baseUrl';
import { ProcessHTTPMsgServiceService } from './process-httpmsg-service.service';
import { Job } from "../models/job.model";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
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

    let formData = new FormData();
    job.title ?? formData.append('title', job.title);
    job.description ?? formData.append('.description', job.description);
    job.estimatedDuration ?? formData.append('.estimatedDuration', job.estimatedDuration);
    job.industry ?? formData.append('.industry', job.industry);
    job.owner ?? formData.append('.owner', job.owner);
    job.jobImageUrl ?? formData.append('.jobImageUrl', job.jobImageUrl);
    job.status ?? formData.append('.status', job.status);
    job.price ?? formData.append('.price', job.price);
    //job.startDate ?? formData.append('.startDate', job.startDate);
    //job.applications ?? formData.append('.applications', job.applications);

    return this.http.post<any>(this.url + `${userId}/addJob`, formData)
      .pipe(catchError(this.processHttpMsgService.handleError));
  }

  getJobsPostedByUser(userId: number): Observable<Job[]> {
    return this.http.get<Job[]>(this.url + `${userId}/jobsposted`)
      .pipe(catchError(this.processHttpMsgService.handleError));
  }

}
