import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { LoggedInGuard } from './config/app.userAuth'
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatTabsModule,
  MatFormFieldModule,
  MatIconModule,
  MatProgressBarModule,
  MatCardModule, MatInputModule
} from '@angular/material';

import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';

import { Helpers } from './helpers/app.helpers';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AutService } from './services/app.auth.service';
import { BaseService } from './services/app.base.service';
import { UserService } from './services/app.user.service';

export const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: 'Home', component: HomeComponent, canActivate: [LoggedInGuard] },
  { path: 'Login', component: LoginComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PageNotFoundComponent,
    HomeComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule, MatTabsModule, MatIconModule, MatFormFieldModule,
    MatButtonModule, MatCheckboxModule, MatCardModule, MatProgressBarModule,
    MatInputModule
  ],
  providers: [RouterLinkActive, FormBuilder,
     AutService,LoggedInGuard,BaseService,Helpers,
     UserService,HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
