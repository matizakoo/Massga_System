import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavUnloggedComponent } from './nav/nav-unlogged/nav-unlogged.component';
import { NavLoggedComponent } from './nav/nav-logged/nav-logged.component';
import { RegisterModalComponent } from './popupModal/register-modal/register-modal.component';
import { LoginModalComponent } from './popupModal/login-modal/login-modal.component';
import {ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatDialogModule} from "@angular/material/dialog";
import {HttpClientModule} from "@angular/common/http";
import {MatButtonModule} from "@angular/material/button";
import { DashboardComponent } from './dashboard/dashboard.component';
import { IndexComponent } from './index/index.component';
import {JWT_OPTIONS, JwtHelperService} from "@auth0/angular-jwt";
import { WelcomepageComponent } from './welcomepage/welcomepage.component';
import { ConfirmEmailComponent } from './confirm-email/confirm-email.component';
import { FadeBackgroundDirective } from './welcomepage/fade-background.directive';

const jwtOptions = {
  tokenGetter: () => localStorage.getItem('token'),
};

@NgModule({
  declarations: [
    AppComponent,
    NavUnloggedComponent,
    NavLoggedComponent,
    RegisterModalComponent,
    LoginModalComponent,
    DashboardComponent,
    IndexComponent,
    WelcomepageComponent,
    ConfirmEmailComponent,
    FadeBackgroundDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    HttpClientModule
  ],
  providers: [JwtHelperService, {provide: JWT_OPTIONS, useValue:jwtOptions}],
  bootstrap: [AppComponent]
})
export class AppModule { }
