import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Application } from '../application.model';
import { InterService } from '../inter.service';
import { JobsPerUserComponent } from '../jobs-per-user/jobs-per-user.component';
import { Job } from '../models/job.model';
import { ApplicationService } from '../services/application.service';
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
    private route: ActivatedRoute,
    private applicationService: ApplicationService,
    private router: Router
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

  confirmApplication(appId: number) {
    this.applicationService.confirmApplication(appId).subscribe((response) => {
      this.router.navigate(['/FindJob'])
    }, (err) => {
      this.router.navigate(['/FindJob'])
    });
  }
}
