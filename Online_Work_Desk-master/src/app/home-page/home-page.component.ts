import { Component, OnInit } from '@angular/core';
import { globalComponenet } from '../global/global.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  userLogin: boolean = globalComponenet.userLogin;
  constructor() {}

  ngOnInit(): void {}
}
