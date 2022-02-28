import { Component, OnInit } from '@angular/core';
import { ApplicationService } from '../services/application.service';

@Component({
  selector: 'app-viewsingleapplication',
  templateUrl: './viewsingleapplication.component.html',
  styleUrls: ['./viewsingleapplication.component.css']
})
export class ViewsingleapplicationComponent implements OnInit {
dataReceived:any
  constructor(private asd:ApplicationService) {
   // this.asd.getApplicationByID(jobId,applicationId).subscribe((response)=>{
     // this.dataReceived=response
    //})
   }

  ngOnInit(): void {
    
  }

}
