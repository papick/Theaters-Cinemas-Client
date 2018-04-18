import { Component, OnInit } from '@angular/core';
import {NewOfferService} from '../new-offer-component/newOfferService';
import {UsedOfferService} from '../../services/usedOfferService';
import {AccountService} from '../../services/account.service';
import {User} from '../../model/user.model';
import {UsedOffer} from './usedOfferInterface';

@Component({
  selector: 'app-used-offer-component',
  templateUrl: './used-offer-component.component.html',
  styleUrls: ['./used-offer-component.component.css']
})
export class UsedOfferComponentComponent implements OnInit {

  usedOffers: any;
  displayAdd = false;
  displayEdit= false;
  loggedUser: any;
  constructor(private usedOfferService: UsedOfferService, private  accService: AccountService) { }

  ngOnInit() {
    this.getOffers();

    this.loggedUser = this.accService.getLoggedUser();
  }

  getOffers() {

    this.usedOfferService.getUsedOffer().subscribe(usedOffers =>  this.usedOffers = usedOffers
    );

  }
  addUsedItem(item) {
    this.usedOfferService.addUsedOffer(item.value).subscribe((ok) =>
      this.getOffers());
  }
  deleteUsedItem(id: Number) {
    console.log(id);
    this.usedOfferService.deleteUsedOffer(id).subscribe((ok) =>
      this.getOffers());
  }
  updateUsedItem(id: Number, item ) {
    this.usedOfferService.updateUsedOffer(id, item.value).subscribe((ok) =>
      this.getOffers());
  }

  showAddDialog() {
    this.displayAdd = true;
    console.log('OVO JE ITEM: ' + JSON.stringify(this.usedOffers[3]));
  }
  showEditDialog() {
    this.displayEdit = true;
  }

  isFanzoneAdminOrLoggedUser(usedOffer) {

    if (this.loggedUser != null
      && ((this.loggedUser.uloga === 'GUEST' && this.loggedUser.id === usedOffer.customer.id)
        || this.loggedUser.uloga === 'FANZONEADMIN')) {

      return true;
    }
  }

  isGuest() {
    if (this.loggedUser != null && this.loggedUser.uloga === 'GUEST'  ) {
      return true;
    }
  }
  isOtherGuest(usedOffer) {
    if (this.loggedUser != null && this.loggedUser.uloga === 'GUEST' && this.loggedUser.id !== usedOffer.customer.id) {
      return true;
    }
  }
  isLoggedUser(usedOffer) {
    if (this.loggedUser != null
      && this.loggedUser.uloga === 'GUEST'
      && this.loggedUser.id === usedOffer.customer.id) {
      return true;
    }
  }

}
