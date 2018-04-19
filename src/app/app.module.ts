import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { routes } from './app.router';
import {DataListModule} from 'primeng/datalist';

import {AccordionModule} from 'primeng/accordion';
import {MenuItem} from 'primeng/api';

import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './components/header-component/header-component.component';
import { MainPanelComponent } from './components/main-panel/main-panel.component';
import { RegisterFormComponentComponent } from './components/register-form-component/register-form-component.component';
import { LogInFormComponentComponent } from './components/log-in-form-component/log-in-form-component.component';
import { CinemaTheaterComponentComponent } from './components/cinema-theater-component/cinema-theater-component.component';
import { HomeComponent } from './components/home/home.component';
import {AccountService} from './services/account.service';
import {FormsModule, NgModel} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RepertoryComponent} from './components/repertory/repertory.component';
import { FanZoneComponentComponent } from './components/fan-zone-component/fan-zone-component.component';
import { NewOfferComponentComponent } from './components/new-offer-component/new-offer-component.component';
import { UsedOfferComponentComponent } from './components/used-offer-component/used-offer-component.component';
import {NewOfferService} from './components/new-offer-component/newOfferService';
import { NewOfferWrapperComponentComponent } from './components/new-offer-wrapper-component/new-offer-wrapper-component.component';
import { UsedOfferWrapperComponentComponent } from './components/used-offer-wrapper-component/used-offer-wrapper-component.component';
import {UsedOfferService} from './services/usedOfferService';



import {DialogModule} from 'primeng/dialog';
import {DataGridModule} from 'primeng/datagrid';

import {HttpModule} from '@angular/http';

import {InstitutionService} from './services/institution.service';
import {PeopleComponent} from './components/people-component/people.component';
import {UserService} from './services/user.service';
import { RequestsComponent } from './components/requests-component/requests.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CalendarModule, DropdownModule} from 'primeng/primeng';
import { AdminFanZoneNotifyComponent } from './components/admin-fan-zone-notify/admin-fan-zone-notify.component';
import { AdminFanZoneNotifyWrapperComponent } from './components/admin-fan-zone-notify-wrapper/admin-fan-zone-notify-wrapper.component';
import {ArtOfWorkService} from './services/artOfWork.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    MainPanelComponent,
    RegisterFormComponentComponent,
    LogInFormComponentComponent,
    CinemaTheaterComponentComponent,
    HomeComponent,
    RepertoryComponent,
    FanZoneComponentComponent,
    NewOfferComponentComponent,
    UsedOfferComponentComponent,
    NewOfferWrapperComponentComponent,
    UsedOfferWrapperComponentComponent,
    PeopleComponent,
    RequestsComponent,
    AdminFanZoneNotifyComponent,
    AdminFanZoneNotifyWrapperComponent,


  ],
  imports: [
    BrowserModule,
    routes,
    FormsModule,
    DataListModule,
    HttpClientModule,
    HttpModule,
    DialogModule,
    BrowserAnimationsModule,
    DataGridModule,
    CalendarModule,
    DropdownModule

  ],
  providers: [AccountService , NewOfferService,
    UsedOfferService, InstitutionService , UserService, ArtOfWorkService],

  bootstrap: [AppComponent]
})
export class AppModule { }
