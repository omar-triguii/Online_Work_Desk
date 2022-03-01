import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';
import { User } from '../models/user.model';
import { JobService } from '../services/job.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  email: any
  userId?: number
  dataReceived: any
  islogedin: boolean | undefined
  fileName?: string;
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

    const file: File = event.target.files[0];

    if (file) {

      this.fileName = file.name;

      this.jobService.uploadImage(file).subscribe({
        next: (response: any) => console.log(response)
      });

      //const upload$ = this.http.post("/api/thumbnail-upload", formData);

      //upload$.subscribe();
  }
  }

  //
  constructor(private asd: AuthServiceService, private aux: UserService, private router: Router, private jobService: JobService) {

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
    this.asd.getuserbyemail(this.asd.getEmail()).subscribe({
      next: (user: User) => this.userId = user.userId
    });

  }
  updateUser(f: any) {
    let data = f.value
    let user: User = <User>{};
    user.address = data.address;
    user.birthDate = data.birthDate;
    if(data.password)
      user.password = data.password;
    user.firstName = this.dataReceived.firstName;
    user.lastName = this.dataReceived.lastName;
    user.phoneNumber = this.dataReceived.phoneNumber;
    if(this.fileName)
      user.profileImage = `http://localhost:8087/files/${this.fileName}`;
    this.aux.update(this.userId, user).subscribe((response) => {
      console.log(response);
      this.router.navigate(['/FindJob']).then(() => {
        window.location.reload();
      });
    });
  }

}


