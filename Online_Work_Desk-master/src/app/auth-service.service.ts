import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { User } from './models/user.model';

const AUTH_API = 'http://localhost:8087/user';
@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  helper = new JwtHelperService();
  constructor(private http: HttpClient) {}

  register(body: any): Observable<any> {
    return this.http.post('http://localhost:8087/user/register', body);
  }

  login(body: any) {
    return this.http.post('http://localhost:8087/user/auth', body);
  }
  getuserbyemail(email: string): Observable<User> {
    return this.http.get<User>(`http://localhost:8087/user/omar/${email}`);
  }
  getusernamebyemail(email: string) {
    return this.http.get(`http://localhost:8087/user/trigui/${email}`, {
      responseType: 'text',
    });
  }
  /*
   getadmin(email:String){

     return this.http.get(`http://localhost:8081/getadmin/${email}`)
   }*/

  saveDataProfil(token: any) {
    //  let decodeToken= this.helper.decodeToken(token)

    localStorage.setItem('token', token);
    let decodeToken = this.helper.decodeToken(token);

    console.log(decodeToken.sub);
  }
  getEmail() {
    let token: any = localStorage.getItem('token');
    let decodeToken = this.helper.decodeToken(token);
    return decodeToken.sub;
  }
  loggedIn() {
    let token: any = localStorage.getItem('token');
    let decodeToken = this.helper.decodeToken(token);
    if (this.helper.isTokenExpired(token)) {
      return false;
    }
    return true;
  }
  logout(): Observable<any> {
    return this.http.get('http://localhost:8087/user/logout', {
      responseType: 'text',
    });
  }
}
