import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  jobId?: number;
  constructor(
    private jobService: JobService,
    private route: ActivatedRoute
  ) {
    this.jobId = +(this.route.snapshot.paramMap.get('jobId') ?? 0);
    console.log(this.jobId);
  }

  ngOnInit(): void {
    this.jobService.seeapplicationsforthisjob(this.jobId ?? 1).subscribe({
      next: (applications: Application[]) => {
        this.allApplications = applications
      }
    });
  }
}
