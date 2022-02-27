import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  messageError: string | undefined;

  constructor(private aus:AuthServiceService,private router:Router) { }

  ngOnInit(): void {
  }
  register(f:any){
    let data=f.value

    this.aus.register(data).subscribe(data=>{
      console.log("okkkkkkk")
      this.router.navigate(['login'])
      
     console.log(data)
    },(err:HttpErrorResponse)=>{
      console.log(err)
      this.messageError="hjbgvehjbhvbsdhbv"})

  }

}
