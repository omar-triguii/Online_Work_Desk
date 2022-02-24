import { Component, OnInit } from '@angular/core';
import { globalComponenet } from '../global/global.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor() { }
  userLogin=globalComponenet.userLogin;
  ngOnInit(): void {
  }

}
