import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private jobService: JobService, private authService: AuthServiceService, private route: Router) { }

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
    this.fileName ? job.jobImageUrl = `http://localhost:8087/files/${this.fileName}` : job.jobImageUrl = null;
    job.estimatedDuration = data.estimatedDuration;
    job.status = 'Free';
    job.price = data.price;
    job.applications = [];
    job.industry = data.industry;
    job.startDate = data.startDate;
    this.authService.getuserbyemail(this.authService.getEmail()).subscribe({
      next: (user: User) => {
        job.owner = user;
        this.jobService.addJob(user, job).subscribe({
          next: (response) => this.route.navigate(['/findmyjobs']),
          error: (err) => console.log(err)
        });
      },
      error: (error) => console.log(error)
    });

  }

}
