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

  constructor(private newOfferService: NewOfferService) { }

  ngOnInit() {
    this.newOfferService.getNewOffer().subscribe(newOffers => this.newOffers = newOffers);
  }

}
