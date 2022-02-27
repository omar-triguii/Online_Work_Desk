import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-homeafterlogin',
  templateUrl: './homeafterlogin.component.html',
  styleUrls: ['./homeafterlogin.component.css']
})
export class HomeafterloginComponent implements OnInit {
  dataReceived:any
  email:""
  user:any
  constructor(private asd:AuthServiceService,private route:Router) {
  
      this.email=this.asd.getEmail()
    // this.asd.getadmin(this.username).subscribe(data =>
    //this.user=data
    console.log(this.email)
    this.asd.getusernamebyemail(this.email).subscribe((response)=>{
    this.dataReceived=response
      console.log(this.dataReceived
        )
      },
      (err:HttpErrorResponse)=>{
        console.log(err)}
    )
    
 
   }
  ngOnInit(): void {
  }

}
