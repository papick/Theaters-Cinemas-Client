import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './components/home/home.component';
import {LogInFormComponentComponent} from './components/log-in-form-component/log-in-form-component.component';
import {RegisterFormComponentComponent} from './components/register-form-component/register-form-component.component';
import {CinemaTheaterComponentComponent} from './components/cinema-theater-component/cinema-theater-component.component';
import {RepertoryComponent} from './components/repertory/repertory.component';
import {FanZoneComponentComponent} from './components/fan-zone-component/fan-zone-component.component';
import {UsedOfferComponentComponent} from './components/used-offer-component/used-offer-component.component';
import {NewOfferComponentComponent} from './components/new-offer-component/new-offer-component.component';
import {NewOfferWrapperComponentComponent} from './components/new-offer-wrapper-component/new-offer-wrapper-component.component';
import {UsedOfferWrapperComponentComponent} from './components/used-offer-wrapper-component/used-offer-wrapper-component.component';




 import {PeopleComponent} from './components/people-component/people.component';
 import {RequestsComponent} from './components/requests-component/requests.component';
import {AdminFanZoneNotifyWrapperComponent} from './components/admin-fan-zone-notify-wrapper/admin-fan-zone-notify-wrapper.component';
import {ReservationComponent} from './components/reservation/reservation.component';

export const router: Routes = [

  {path: '', redirectTo: 'home' , pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'log-in-form-component', component: LogInFormComponentComponent},
  {path: 'register-form-component', component: RegisterFormComponentComponent},
  {path: 'cinema-theater-component', component: CinemaTheaterComponentComponent},
  // {path: 'repertory', component: RepertoryComponent}
  {path: 'fan-zone-component', component: FanZoneComponentComponent ,
    children: [
      {path: 'used-offer-wrapper', component: UsedOfferWrapperComponentComponent},
      {path: 'new-offer-wrapper', component: NewOfferWrapperComponentComponent},
      {path: 'admin-fan-zone-notify-wrapper', component: AdminFanZoneNotifyWrapperComponent}
      ]},

  {path: 'login', component: LogInFormComponentComponent},
  {path: 'register', component: RegisterFormComponentComponent},
  {path: 'cinemas', component: CinemaTheaterComponentComponent},
  {path: 'cinemas/:cinemaId', component: RepertoryComponent},
  {path: 'theaters', component: CinemaTheaterComponentComponent},
  {path: 'cinemas/:cinemaId/repertory', component: RepertoryComponent},
  {path: 'theaters/:theaterId/repertory', component: RepertoryComponent},
  {path: 'people', component: PeopleComponent},
  {path: 'requests', component: RequestsComponent},
  {path: 'reservation/:artOfWorkId', component: ReservationComponent}


];


export  const routes: ModuleWithProviders = RouterModule.forRoot(router);
