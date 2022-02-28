import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FindJobComponent } from './find-job/find-job.component';
import { FindUserComponent } from './find-user/find-user.component';

import { HomePageComponent } from './home-page/home-page.component';
import { HomeafterloginComponent } from './homeafterlogin/homeafterlogin.component';
import { JobsPerUserComponent } from './jobs-per-user/jobs-per-user.component';
import { LoginInterfaceComponent } from './login-interface/login-interface.component';
import { OtherUserProfileComponent } from './other-user-profile/other-user-profile.component';
import { PostJobComponent } from './post-job/post-job.component';
import { ProfileComponent } from './profile/profile.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ViewapplicationsforeachjobComponent } from './viewapplicationsforeachjob/viewapplicationsforeachjob.component';
import { ViewsingleapplicationComponent } from './viewsingleapplication/viewsingleapplication.component';
import { WrongRouteComponentComponent } from './wrong-route-component/wrong-route-component.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'viewsingleapplication/:jobId', component: ViewapplicationsforeachjobComponent },
  { path: 'findmyjobs', component: JobsPerUserComponent },
  { path: 'viewapp', component: ViewapplicationsforeachjobComponent },
  {path: 'homelogined', component: HomeafterloginComponent },
  { path: 'login', component: LoginInterfaceComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'postJob', component: PostJobComponent },
  { path: 'FindJob', component: FindJobComponent },
  { path: 'findUser', component: FindUserComponent },
  { path: 'otherUserProfile', component: OtherUserProfileComponent },
  { path: 'signUp', component: SignUpComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', pathMatch: 'full', component: WrongRouteComponentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
