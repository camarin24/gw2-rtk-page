import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { RouterLinkActive } from '@angular/router';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule, 
  MatCheckboxModule,
  MatTabsModule,
  MatFormFieldModule,
  MatIconModule,
  MatProgressBarModule,
  MatCardModule,MatInputModule} from '@angular/material';

  import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

export const routes: Routes = [
  { path: '', redirectTo: '/Login', pathMatch: 'full' },
  { path: 'Home', component: HomeComponent },
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
    BrowserAnimationsModule,MatTabsModule,MatIconModule,MatFormFieldModule,
    MatButtonModule, MatCheckboxModule,MatCardModule,MatProgressBarModule,
    MatInputModule
  ],
  providers: [RouterLinkActive,FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
