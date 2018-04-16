import { Component, OnInit } from '@angular/core';
import {NewOfferService} from '../new-offer-component/newOfferService';
import {UsedOfferService} from './usedOfferService';

@Component({
  selector: 'app-used-offer-component',
  templateUrl: './used-offer-component.component.html',
  styleUrls: ['./used-offer-component.component.css']
})
export class UsedOfferComponentComponent implements OnInit {

  usedOffers: any;
  displayAdd = false;
  displayEdit= false;

  constructor(private usedOfferService: UsedOfferService) { }

  ngOnInit() {
    this.getOffers();
  }

  getOffers() {
    this.usedOfferService.getUsedOffer().subscribe(usedOffers => this.usedOffers = usedOffers);
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
  }
  showEditDialog() {
    this.displayEdit = true;
  }


}
