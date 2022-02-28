import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Job } from './models/job.model';

@Injectable({
  providedIn: 'root',
})
export class InterService {
  constructor() {}

  public subject = new BehaviorSubject<any>(null);

  emit<T>(jobs: Job[]) {
    this.subject.next(jobs);
  }
  on<T>(): Observable<Job[]> {
    return this.subject.asObservable();
  }
}
