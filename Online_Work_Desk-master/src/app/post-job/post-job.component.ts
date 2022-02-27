import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-post-job',
  templateUrl: './post-job.component.html',
  styleUrls: ['./post-job.component.css'],
})
export class PostJobComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

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
}
