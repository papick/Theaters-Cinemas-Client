import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './home/home.component';
import {LogInFormComponentComponent} from './log-in-form-component/log-in-form-component.component';
import {RegisterFormComponentComponent} from './register-form-component/register-form-component.component';
import {CinemaTheaterComponentComponent} from './cinema-theater-component/cinema-theater-component.component';
import {RepertoryComponent} from './repertory/repertory.component';
import {FanZoneComponentComponent} from './fan-zone-component/fan-zone-component.component';
import {UsedOfferComponentComponent} from './used-offer-component/used-offer-component.component';
import {NewOfferComponentComponent} from './new-offer-component/new-offer-component.component';
import {NewOfferWrapperComponentComponent} from './new-offer-wrapper-component/new-offer-wrapper-component.component';
import {UsedOfferWrapperComponentComponent} from './used-offer-wrapper-component/used-offer-wrapper-component.component';

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
      {path: 'new-offer-wrapper', component: NewOfferWrapperComponentComponent}
      ]}



];


export  const routes: ModuleWithProviders = RouterModule.forRoot(router);
