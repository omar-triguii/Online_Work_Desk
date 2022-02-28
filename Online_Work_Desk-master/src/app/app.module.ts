import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginInterfaceComponent } from './login-interface/login-interface.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { ProfileComponent } from './profile/profile.component';
import { PostJobComponent } from './post-job/post-job.component';
import { FindJobComponent } from './find-job/find-job.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { WrongRouteComponentComponent } from './wrong-route-component/wrong-route-component.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { FindUserComponent } from './find-user/find-user.component';
import { OtherUserProfileComponent } from './other-user-profile/other-user-profile.component';
import { HomeafterloginComponent } from './homeafterlogin/homeafterlogin.component';
import { JobsPerUserComponent } from './jobs-per-user/jobs-per-user.component';
import { ViewapplicationsforeachjobComponent } from './viewapplicationsforeachjob/viewapplicationsforeachjob.component';
import { ViewsingleapplicationComponent } from './viewsingleapplication/viewsingleapplication.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginInterfaceComponent,
    HomePageComponent,
    NavBarComponent,
    FooterComponent,
    ProfileComponent,
    PostJobComponent,
    FindJobComponent,
    SignUpComponent,
    WrongRouteComponentComponent,

    HomeafterloginComponent,
    JobsPerUserComponent,
    ViewapplicationsforeachjobComponent,
    ViewsingleapplicationComponent,

    FindUserComponent,
    OtherUserProfileComponent,
    HomeafterloginComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
