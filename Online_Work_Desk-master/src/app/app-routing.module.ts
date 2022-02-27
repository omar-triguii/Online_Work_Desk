import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FindJobComponent } from './find-job/find-job.component';

import { HomePageComponent } from './home-page/home-page.component';
import { HomeafterloginComponent } from './homeafterlogin/homeafterlogin.component';
import { LoginInterfaceComponent } from './login-interface/login-interface.component';
import { PostJobComponent } from './post-job/post-job.component';
import { ProfileComponent } from './profile/profile.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { WrongRouteComponentComponent } from './wrong-route-component/wrong-route-component.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  {path: 'homelogined', component: HomeafterloginComponent },
  { path: 'login', component: LoginInterfaceComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'postJob', component: PostJobComponent },
  { path: 'FindJob', component: FindJobComponent },
  { path: 'signUp', component: SignUpComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', pathMatch: 'full', component: WrongRouteComponentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
