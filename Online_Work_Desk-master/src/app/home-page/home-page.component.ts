import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';
import { globalComponenet } from '../global/global.component';

//import {  } from "typed.js";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  userLogin: boolean = globalComponenet.userLogin;
  constructor() {}

  ngOnInit(): void {
    const options = {
      strings: ['Mouadh.', 'Tira.', 'La Corda.', 'Ingenieur.', 'The Best.'],
      typeSpeed: 100,
      backSpeed: 80,
      showCursor: true,
      cursorChar: '|',
      loop: true,
    };
    const typed = new Typed('.auto-typed', options);
  }
}
