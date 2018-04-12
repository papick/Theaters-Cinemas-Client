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
    this.newOfferService.getNewOffer().subscribe(newOffers => this.newOffers = newOffers);
  }
  addItem(item) {
    this.newOfferService.addOffer(item.value).subscribe((ok) =>
      this.newOfferService.getNewOffer().subscribe(newOffers => this.newOffers = newOffers));
  }
  deleteItem(id: Number) {
    this.newOfferService.deleteOffer(id).subscribe((ok) => console.log(ok));
  }

  showAddDialog() {
    console.log('pera');
    this.displayAdd = true;
  }

  showEditDialog() {
    this.displayEdit = true;
  }

}
