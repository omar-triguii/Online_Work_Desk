import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';
import { AuthServiceService } from '../auth-service.service';
import { globalComponenet } from '../global/global.component';

//import {  } from "typed.js";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  userLogin: boolean = globalComponenet.userLogin;
  userName: string = '';

  constructor(private authService: AuthServiceService) {}

  ngOnInit(): void {
<<<<<<< HEAD
    if (this.authService.loggedIn()) {
      this.authService
        .getusernamebyemail(this.authService.getEmail())
        .subscribe({
          next: (username: string) => {
            this.userName = username;
            let options = {
              strings: this.userName.split(' '),
              typeSpeed: 100,
              backSpeed: 80,
              showCursor: true,
              cursorChar: '|',
              loop: true,
            };
            let typed = new Typed('.auto-typed', options);
          },
        });
    } else this.userName = 'User';
=======

    if(this.authService.loggedIn()) {
      this.authService.getusernamebyemail(this.authService.getEmail()).subscribe({
        next: (username: string) => {
          this.userName = username;
          let options = {
            strings: this.userName.split(' '),
            typeSpeed: 100,
            backSpeed: 80,
            showCursor: true,
            cursorChar: '|',
            loop: true,
          };
          let typed = new Typed('.auto-typed', options);
        }
      });
    } else { let options = {
      strings: ['To Khademni','To our website'],
      typeSpeed: 100,
      backSpeed: 80,
      showCursor: true,
      cursorChar: '|',
      loop: true,
    };
    let typed = new Typed('.auto-typed', options);
  
      
    };


>>>>>>> fb2b2429fa92c1585ace7c8f782ebc70c180c48e
  }
}
