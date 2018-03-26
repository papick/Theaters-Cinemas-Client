import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { routes } from './app.router';

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




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    MainPanelComponent,
    RegisterFormComponentComponent,
    LogInFormComponentComponent,
    CinemaTheaterComponentComponent,
    HomeComponent,
    // RepertoryComponent
  ],
  imports: [
    BrowserModule,
    routes,
    FormsModule,
    HttpClientModule
  ],
  providers: [AccountService],
  bootstrap: [AppComponent]
})
export class AppModule { }
