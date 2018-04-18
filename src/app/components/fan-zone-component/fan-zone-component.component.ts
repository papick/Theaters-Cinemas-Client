import { Component, OnInit } from '@angular/core';
import {AccountService} from '../../services/account.service';

@Component({
  selector: 'app-fan-zone-component',
  templateUrl: './fan-zone-component.component.html',
  styleUrls: ['./fan-zone-component.component.css']
})
export class FanZoneComponentComponent implements OnInit {

  logedUser: any;

  constructor(private  accountService: AccountService) { }

  ngOnInit() {
    this.logedUser = this.accountService.getLoggedUser();
  }


  isFanzoneAdmin() {

    if (this.logedUser != null && this.logedUser.uloga === 'FANZONEADMIN') {

      return true;
    }
  }


}
