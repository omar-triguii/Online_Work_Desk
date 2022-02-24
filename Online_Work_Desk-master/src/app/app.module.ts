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
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
