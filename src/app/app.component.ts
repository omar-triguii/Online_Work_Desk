import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(){
    
  }
  title = 'khadamni';
  ngAfterViewChecked() {
    window.scrollTo(0, 0);
    }
}
