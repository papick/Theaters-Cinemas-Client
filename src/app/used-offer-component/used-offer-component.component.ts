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

  constructor(private usedOfferService: UsedOfferService) { }

  ngOnInit() {
    this.usedOfferService.getUsedOffer().subscribe(usedOffers => this.usedOffers = usedOffers);
  }

}
