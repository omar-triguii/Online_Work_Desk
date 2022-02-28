import { HttpErrorResponse } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';
import { globalComponenet } from '../global/global.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  logoutmessage: string | undefined
  email: any
  dataReceived: any
  islogedin: boolean | undefined
  constructor(private asd: AuthServiceService, private router: Router) {

    this.islogedin = this.asd.loggedIn()
    console.log(this.islogedin)
    //this.userLogin()
    if (this.islogedin == false) {
      this.email = null
    }
    else {
      this.email = this.asd.getEmail()
      // this.asd.getadmin(this.username).subscribe(data =>
      //this.user=data
      console.log(this.email)
      this.asd.getusernamebyemail(this.email).subscribe({
        next: (response) => {
          this.dataReceived = response
          console.log(this.dataReceived)
        }, error: (err: HttpErrorResponse) => {
          console.log(err)
        }
      })
    }

  }
  /*userLogin(){
    console.log(this.islogedin+"zebi")
    if (this.islogedin==true){
    return true}
    else{
      return false
    }
  }*/
  //userLogin=globalComponenet.userLogin;
  ngOnInit(): void {
  }
  logout() {

    this.asd.logout().subscribe((response: string | undefined) => {
      this.logoutmessage = response
      this.islogedin = false
      this.dataReceived = null
      localStorage.clear();
      console.log(this.logoutmessage)
      this.router.navigate(['login'])
    })
  }
}


