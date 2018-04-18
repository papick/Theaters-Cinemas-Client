import { Component, OnInit } from '@angular/core';
import {NewOfferService} from './newOfferService';
import {NewOffer} from './newOfferInterface';
import {AccountService} from '../../services/account.service';

@Component({
  selector: 'app-new-offer-component',
  templateUrl: './new-offer-component.component.html',
  styleUrls: ['./new-offer-component.component.css']
})
export class NewOfferComponentComponent implements OnInit {


  newOffers: any;
  displayAdd = false;
  displayEdit = false;
  newOfferEdit: NewOffer;
  logedUser: any;
  constructor(private newOfferService: NewOfferService, private  acountService: AccountService ) {}


  ngOnInit() {
    this.getOffers();
    this.logedUser = this.acountService.getLoggedUser();
  }
    getOffers() {
    this.newOfferService.getNewOffer().subscribe(newOffers => this.newOffers = newOffers);
  }
  addItem(item) {
    this.newOfferService.addOffer(item.value).subscribe((ok) =>
      this.getOffers());
  }
  deleteItem(id: Number) {
    console.log(id);
    this.newOfferService.deleteOffer(id).subscribe((ok) =>
    this.getOffers());
  }
  updateItem(id: Number, item ) {
    this.newOfferService.updateOffer(id, item.value).subscribe((ok) =>
      this.getOffers());
  }

  showAddDialog() {
    this.displayAdd = true;
  }
  showEditDialog(offer) {
    this.displayEdit = true;

    this.newOfferEdit = offer;
  }
  isFanzoneAdmin() {

    if (this.logedUser != null && this.logedUser.uloga === 'FANZONEADMIN') {

      return true;
    }
  }
  isGuest() {
    if (this.logedUser != null && this.logedUser.uloga === 'GUEST') {
      return true;
    }
  }

}
