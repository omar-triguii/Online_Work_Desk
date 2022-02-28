import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Application } from '../application.model';
import { AuthServiceService } from '../auth-service.service';
import { Job } from '../models/job.model';
import { User } from '../models/user.model';
import { JobService } from '../services/job.service';

@Component({
  selector: 'app-find-job',
  templateUrl: './find-job.component.html',
  styleUrls: ['./find-job.component.css'],
})
export class FindJobComponent implements OnInit {
  jobs: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  allJobs: Job[] = [];
  allImages: any[] = [];
  currJob: Job = <Job>{};
  currUser: User = <User>{};

  constructor(private jobService: JobService, private authService: AuthServiceService) { }

  ngOnInit(): void {

    this.authService.getuserbyemail(this.authService.getEmail()).subscribe({
      next: (user: User) => {
        this.currUser = user;
        this.jobService.getAllJobs().subscribe({
          next: (jobs) => {
            this.allJobs = jobs.filter((job: Job) => {
              return job.status == 'Free' && job.owner.userId != this.currUser.userId
            });
          }
        });
      },
    });
  }

  seeJobDetails(job: Job) {
    this.currJob = job;
  }

  applyForJob() {

    let app: Application = <Application>{};

    this.authService.getuserbyemail(this.authService.getEmail()).subscribe({
      next: (user: User) => {
        let id = user.userId;
        app.description = 'Please accept me';
        app.applicationOwner = user;
        app.job = this.currJob;
        this.jobService.createApplication(id, this.currJob.jobId, app).subscribe((response) => console.log(response));
      }
    });
  }

  searchJobs(key: string) {
    console.log(key);
    const results: Job[] = [];
    for (const job of this.allJobs) {
      if (
        job.title.toLowerCase().indexOf(key.toLowerCase()) !== -1 ||
        job.industry.toLowerCase().indexOf(key.toLowerCase()) !== -1
      )
        results.push(job);
    }
    this.allJobs = results;
    if (!key) {
      this.jobService.getAllJobs().subscribe({
        next: (jobs) => {
          this.allJobs = jobs.filter((job: Job) => job.status == 'Free' && job.owner.userId != this.currUser.userId);
        },
      });
    }
  }

  locationList: string[] = [
    'Ariana',
    'Béja',
    'Ben Arous',
    'Bizerte',
    'Gabès',
    'Gafsa',
    'Jendouba',
    'Kairouan',
    'Kasserine',
    'Kébili',
    'Kef',
    'Mahdia',
    'Manouba',
    'Médenine',
    'Monastir',
    'Nabeul',
    'Sfax',
    'Sidi Bouzid',
    'Siliana',
    'Sousse',
    'Tataouine',
    'Tozeur',
    'Tunis',
    'Zaghouan',
  ];
  jobList: string[] = ['banay  ', 'engineer  ', 'dahan  '];
}
