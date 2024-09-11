import { Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { SignupComponent } from './Components/signup/signup.component';
import { NotFoundError } from 'rxjs';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { AboutComponent } from './Components/about/about.component';
import { CreatebinComponent } from './Components/createbin/createbin.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'create', component: CreatebinComponent },
    { path: 'about', component: AboutComponent },
    {path:'', redirectTo:"/login", pathMatch:"full"},
    {path:'**', component: NotFoundComponent} 
  ];
