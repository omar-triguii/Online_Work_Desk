import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Typed from 'typed.js';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-homeafterlogin',
  templateUrl: './homeafterlogin.component.html',
  styleUrls: ['./homeafterlogin.component.css']
})
export class HomeafterloginComponent implements OnInit {
  dataReceived: any

  email: ""
  user: any
  constructor(private asd: AuthServiceService, private route: Router) {

    this.email = this.asd.getEmail()
    this.asd.getusernamebyemail(this.email).subscribe((response) => {
      this.dataReceived = response
      console.log(this.dataReceived)
    },
      (err: HttpErrorResponse) => {
        console.log(err)
      }
    )


  }
  ngOnInit(): void {
    const options = {
      String: this.dataReceived,
      typeSpeed: 100,
      backSpeed: 80,
      showCursor: true,
      cursorChar: '|',
      loop: true,
    };
    const typed = new Typed('.auto-typed', options);
  }
}
