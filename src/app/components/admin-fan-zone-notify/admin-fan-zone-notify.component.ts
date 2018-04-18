import { Component, OnInit } from '@angular/core';
import {UsedOfferService} from '../../services/usedOfferService';
import {AccountService} from '../../services/account.service';

@Component({
  selector: 'app-admin-fan-zone-notify',
  templateUrl: './admin-fan-zone-notify.component.html',
  styleUrls: ['./admin-fan-zone-notify.component.css']
})
export class AdminFanZoneNotifyComponent implements OnInit {


  usedOffers: any;
  loggedUser: any;
  constructor(private usedOfferService: UsedOfferService, private  accService: AccountService) { }

  ngOnInit() {
    this.getOffers();

    this.loggedUser = this.accService.getLoggedUser();
  }

  getOffers() {

    this.usedOfferService.getNotApprovedUsedOffer().subscribe(usedOffers =>  this.usedOffers = usedOffers

    );

  }
  deleteUsedItem(id: Number) {
    console.log(id);
    this.usedOfferService.deleteUsedOffer(id).subscribe((ok) =>
      this.getOffers());
  }
  updateUsedItem(item) {
    item.approved = true;
    this.usedOfferService.updateUsedOffer(item.id , item).subscribe((ok) =>
      this.getOffers());
  }



}
