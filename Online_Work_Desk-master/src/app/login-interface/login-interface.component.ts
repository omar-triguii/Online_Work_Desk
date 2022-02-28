import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';
@Component({
  selector: 'app-login-interface',
  templateUrl: './login-interface.component.html',
  styleUrls: ['./login-interface.component.css']
})
export class LoginInterfaceComponent implements OnInit {
  omar:boolean | undefined 
  dataReceived:any
  IsLoggedIn:Boolean=false
  constructor(private aus:AuthServiceService,private route:Router) {
    console.log(this.aus.loggedIn())
  }

  ngOnInit(): void {
  }


  loginadmin(f: any) {
    let data = f.value
    this.aus.login(data).subscribe((response) => {
      this.dataReceived = response
      this.aus.saveDataProfil(this.dataReceived.token)
      this.IsLoggedIn = true
      //console.log(this.dataReceived)
      //console.log(this.aus.loggedIn())
      this.route.navigate(['home']).then(() => {
        window.location.reload();
        this.omar=false
      });
      }
      ,err=>{
        console.log(err)
        this.omar=true
        console.log(this.omar)
      })
    

  }
}
