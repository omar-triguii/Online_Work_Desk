import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import { Job } from '../models/job.model';
import { User } from '../models/user.model';
import { JobService } from '../services/job.service';

@Component({
  selector: 'app-post-job',
  templateUrl: './post-job.component.html',
  styleUrls: ['./post-job.component.css'],
})
export class PostJobComponent implements OnInit {

  userId?: number = 1;

  constructor(private jobService: JobService, private authService: AuthServiceService) { }

  ngOnInit(): void {

  }

  requiredSkills: string[] = [];
  addTorequiredSkills(skill: string) {
    this.requiredSkills.push(skill);
  }
  removefromRequiredSkills(skill: string) {
    let index: number = 0;
    let skills = [];
    for (let item of this.requiredSkills) {
      if (skill != item) {
        skills.push(item);

        // delete this.requiredSkills[index];
        // this.deleteHtmlElement(element);
      }
      this.requiredSkills = skills;
      index = index + 1;
    }
  }

  fileName = '';

  onFileSelected(event: any) {

    const file:File = event.target.files[0];

    if (file) {

        this.fileName = file.name;

        this.jobService.uploadImage(file).subscribe({
          next: (response: any) => console.log(response)
        });

        //const upload$ = this.http.post("/api/thumbnail-upload", formData);

        //upload$.subscribe();
    }
}

  postJob(f: any) {
    let job: Job = <Job>{};
    let data = f.value;
    job.title = data.title;
    job.description = data.description;
    job.jobImageUrl = `http://localhost:8087/files/${this.fileName}`;
    job.estimatedDuration = data.estimatedDuration;
    job.status = 'Free';
    job.price = data.price;
    job.applications = [];
    job.industry = data.industry;
    job.requiredSkills = this.requiredSkills;
    job.startDate = data.startDate;
    console.log(job)
    this.authService.getuserbyemail(this.authService.getEmail()).subscribe({
      next: (user: User) => {
        this.jobService.addJob(user.userId, job).subscribe({
          next: (response) => console.log(response),
          error: (err) => console.log(err)
        });
      },
      error: (error) => console.log(error)
    });

    /* let data = f.value;
    console.log(data);
    this.authService.getuserbyemail(this.authService.getEmail()).subscribe({
      next: (user: User) => {
        this.userId = parseInt(user.userId);
        this.jobService.addJob(this.userId, data).subscribe({
          next: (job) => console.log(job),
          error: (err) => console.log(err)
        });
      }
    }) */
  }

}
