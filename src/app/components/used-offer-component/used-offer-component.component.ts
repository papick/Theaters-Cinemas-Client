import { Component, OnInit } from '@angular/core';
import {NewOfferService} from '../new-offer-component/newOfferService';
import {UsedOfferService} from '../../services/usedOfferService';
import {AccountService} from '../../services/account.service';
import {User} from '../../model/user.model';
import {UsedOffer} from './usedOfferInterface';
import {BiddingService} from '../../services/bidding.service';
import {Bid} from '../../model/bidding.model';

@Component({
  selector: 'app-used-offer-component',
  templateUrl: './used-offer-component.component.html',
  styleUrls: ['./used-offer-component.component.css']
})
export class UsedOfferComponentComponent implements OnInit {

  usedOffers: any;
  usedOfferEdit: any;
  displayAdd = false;
  displayEdit= false;
  displayBuy = false;
  usedOferBuy: any;
  loggedUser: any;
  displayBids = false;


  constructor(private usedOfferService: UsedOfferService, private  accService: AccountService,
              private biddingService: BiddingService) { }

  ngOnInit() {
    this.usedOfferEdit = new UsedOffer();
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
  updateUsedItem() {
    console.log(JSON.stringify(this.usedOfferEdit));
    this.usedOfferService.updateUsedOffer(this.usedOfferEdit.id, this.usedOfferEdit).subscribe((ok) =>
      this.getOffers());
  }
  addBid(item) {
      const bid = new Bid(item.value.bid , this.usedOferBuy , this.loggedUser);
      console.log(JSON.stringify(item.bid));
      this.biddingService.addBid(bid).subscribe((ok) => this.biddingService.getBidds(this.usedOferBuy.id));

  }

  showAddDialog() {
    this.displayAdd = true;
    console.log('OVO JE ITEM: ' + JSON.stringify(this.usedOffers[3]));
  }
  showBuyDialog(usedOffer) {
    this.displayBuy = true;
    this.usedOferBuy = usedOffer;
  }
  displayBidsFunction() {
    this.displayBids = true;
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

  showEditDialog(itemEdit) {
    this.usedOfferEdit = itemEdit;
    this.showEdit();
  }
  showEdit() {
    this.displayEdit = !this.displayEdit;
  }
  showButtonBids(usedOffer){
    if (this.loggedUser != null
      && this.loggedUser.uloga === 'GUEST'
      && this.loggedUser.id === usedOffer.customer.id) {
       return true;
    }
  }
  isLoggedUser(usedOffer) {

    if (this.loggedUser != null
      && this.loggedUser.uloga === 'GUEST'
      && this.loggedUser.id === usedOffer.customer.id
    ) {
      return true;
    }
  }

}
