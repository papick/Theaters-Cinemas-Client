import { Component, OnInit } from '@angular/core';
import {NewOfferService} from './newOfferService';
import {NewOffer} from './newOfferInterface';

@Component({
  selector: 'app-new-offer-component',
  templateUrl: './new-offer-component.component.html',
  styleUrls: ['./new-offer-component.component.css']
})
export class NewOfferComponentComponent implements OnInit {


  newOffers: any;
  displayAdd = false;
  displayEdit = false;
  item;

  constructor(private newOfferService: NewOfferService) { }

  ngOnInit() {
    this.getOffers();
  }
  getOffers(){
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
  showEditDialog() {
    this.displayEdit = true;
  }

}
