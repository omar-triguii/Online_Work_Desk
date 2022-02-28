import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
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

  postJob(f: any) {
    let data = f.value;
    console.log(data);
    this.authService.getuserbyemail(this.authService.getEmail()).subscribe({
      next: (user: User) => {
        this.userId = parseInt(user.userId);
        this.jobService.addJob(this.userId, data).subscribe({
          next: (job) => console.log(job),
          error: (err) => console.log(err)
        });
      }
    })
  }

}
