import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { routes } from './app.router';

import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './components/header-component/header-component.component';
import { MainPanelComponent } from './components/main-panel/main-panel.component';
import { RegisterFormComponentComponent } from './components/register-form-component/register-form-component.component';
import { LogInFormComponentComponent } from './components/log-in-form-component/log-in-form-component.component';
import { CinemaTheaterComponentComponent } from './components/cinema-theater-component/cinema-theater-component.component';
import { HomeComponent } from './components/home/home.component';
import {AccountService} from './services/account.service';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';
import {RepertoryComponent} from './components/repertory/repertory.component';
import {InstitutionService} from './services/institution.service';
import { CinemaTheaterProfileComponent } from './components/cinema-theater-profile/cinema-theater-profile.component';
import {PeopleComponent} from './components/people-component/people.component';
import {UserService} from './services/user.service';
import { RequestsComponent } from './components/requests-component/requests.component';


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
    CinemaTheaterProfileComponent,
    PeopleComponent,
    RequestsComponent,
  ],
  imports: [
    BrowserModule,
    routes,
    FormsModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [AccountService, InstitutionService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
