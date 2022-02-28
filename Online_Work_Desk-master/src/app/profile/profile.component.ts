import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  email: any
  userId: any
  dataReceived: any
  islogedin: boolean | undefined
  //
  //url; //Angular 8
  url: any; //Angular 11, for stricter type
  msg = "";

  //selectFile(event) { //Angular 8
  selectFile(event: any) { //Angular 11, for stricter type
    if (!event.target.files[0] || event.target.files[0].length == 0) {
      this.msg = 'You must select an image';
      return;
    }

    var mimeType = event.target.files[0].type;

    if (mimeType.match(/image\/*/) == null) {
      this.msg = "Only images are supported";
      return;
    }

    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);

    reader.onload = (_event) => {
      this.msg = "";
      this.url = reader.result;

    }
  }
  //
  constructor(private asd: AuthServiceService, private aux: UserService, private router: Router) {

    this.islogedin = this.asd.loggedIn()
    console.log(this.islogedin + "test")
    //this.userLogin()
    if (this.islogedin == false) {
      this.email = null
    }
    else {
      this.email = this.asd.getEmail()
      this.asd.getuserbyemail(this.email).subscribe((response) => {
        this.dataReceived = response
        console.log(this.dataReceived.lastName)
        console.log(this.dataReceived
        )
        //this.dataReceived.birthdate=Birthdate
      },
        (err: HttpErrorResponse) => {
          console.log(err)
        }
      )
    }
  }
  ngOnInit(): void {
  }
  updateUser(f: any) {
    let data = f.value
    console.log(data);
    this.userId = this.dataReceived.userId
    console.log(this.userId)
    this.aux.update(this.userId, data).subscribe((response) => {
      console.log(response)
      this.router.navigate(['home'])
    }, err => console.log(err))
  }

}


