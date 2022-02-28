import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Job } from '../models/job.model';
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

  constructor(private jobService: JobService) { }

  ngOnInit(): void {
    this.jobService.getAllJobs().subscribe({
      next: (jobs) => {
        this.allJobs = jobs.filter((job: Job) => job.status == 'Free');
      }
    });
  }

  seeJobDetails(job: Job) {
    this.currJob = job;
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
