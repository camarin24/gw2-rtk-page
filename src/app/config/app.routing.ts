import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../Login/login.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';

// Route Configuration
export const routes: Routes = [
    { path: '', redirectTo: '/Login', pathMatch: 'full' },
    { path: 'Login', component: LoginComponent, },
    { path: '**', component: PageNotFoundComponent }
];