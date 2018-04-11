import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { routes } from './app.router';
import {DataListModule} from 'primeng/datalist';

import {AccordionModule} from 'primeng/accordion';
import {MenuItem} from 'primeng/api';

import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { MainPanelComponent } from './main-panel/main-panel.component';
import { RegisterFormComponentComponent } from './register-form-component/register-form-component.component';
import { LogInFormComponentComponent } from './log-in-form-component/log-in-form-component.component';
import { CinemaTheaterComponentComponent } from './cinema-theater-component/cinema-theater-component.component';
import { HomeComponent } from './home/home.component';
import {AccountService} from './service/account.service';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RepertoryComponent} from './repertory/repertory.component';
import { FanZoneComponentComponent } from './fan-zone-component/fan-zone-component.component';
import { NewOfferComponentComponent } from './new-offer-component/new-offer-component.component';
import { UsedOfferComponentComponent } from './used-offer-component/used-offer-component.component';
import {NewOfferService} from './new-offer-component/newOfferService';
import { NewOfferWrapperComponentComponent } from './new-offer-wrapper-component/new-offer-wrapper-component.component';
import { UsedOfferWrapperComponentComponent } from './used-offer-wrapper-component/used-offer-wrapper-component.component';
import {UsedOfferService} from './used-offer-component/usedOfferService';






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
    UsedOfferWrapperComponentComponent
  ],
  imports: [
    BrowserModule,
    routes,
    FormsModule,
    HttpClientModule,
    DataListModule
  ],
  providers: [AccountService , NewOfferService, UsedOfferService],
  bootstrap: [AppComponent]
})
export class AppModule { }
