import { Component, OnInit } from '@angular/core';
import { Application } from '../application.model';
import { InterService } from '../inter.service';
import { JobsPerUserComponent } from '../jobs-per-user/jobs-per-user.component';
import { Job } from '../models/job.model';
import { JobService } from '../services/job.service';

@Component({
  selector: 'app-viewapplicationsforeachjob',
  templateUrl: './viewapplicationsforeachjob.component.html',
  styleUrls: ['./viewapplicationsforeachjob.component.css'],
})
export class ViewapplicationsforeachjobComponent implements OnInit {
  allApplications: Application[] = [];
  dataReceived: any;
  email: any;
  x: any;
  jobsPosted: Job[] = []; //list of job posted by user
  w: any;
  constructor(
    private jobService: JobService,
    private xx: JobsPerUserComponent,
    private interservice: InterService
  ) {}

  ngOnInit(): void {
    //this.w=this.xx.w
    this.jobService.seeapplicationsforthisjob(1).subscribe({
      next: (applications: Application[]) => {
        this.allApplications = applications;
        console.log(this.w);
        console.log('respklvznlkndonse');
      },
    });

    this.interservice.on<Job[]>().subscribe((data: Job[]) => {
      this.jobsPosted = data;
    });
  }
}
