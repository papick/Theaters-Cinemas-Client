 import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './components/home/home.component';
import {LogInFormComponentComponent} from './components/log-in-form-component/log-in-form-component.component';
import {RegisterFormComponentComponent} from './components/register-form-component/register-form-component.component';
import {CinemaTheaterComponentComponent} from './components/cinema-theater-component/cinema-theater-component.component';
import {CinemaTheaterProfileComponent} from './components/cinema-theater-profile/cinema-theater-profile.component';

import {RepertoryComponent} from './components/repertory/repertory.component';

export const router: Routes = [

  {path: '', redirectTo: 'home' , pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LogInFormComponentComponent},
  {path: 'register', component: RegisterFormComponentComponent},
  {path: 'cinemas', component: CinemaTheaterComponentComponent},
  {path: 'cinemas/:name', component: CinemaTheaterProfileComponent},
  {path: 'theaters', component: CinemaTheaterComponentComponent},
  {path: 'theaters/:name', component: CinemaTheaterProfileComponent},
  {path: 'cinemas/:name/repertory', component: RepertoryComponent},
  {path: 'theaters/:name/repertory', component: RepertoryComponent}


];

export  const routes: ModuleWithProviders = RouterModule.forRoot(router);
