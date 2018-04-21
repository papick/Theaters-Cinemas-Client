import { Component, OnInit, Input } from '@angular/core';
import {UsedOffer} from '../used-offer-component/usedOfferInterface';
import {BiddingService} from '../../services/bidding.service';

@Component({
  selector: 'app-bidding-component',
  templateUrl: './bidding-component.component.html',
  styleUrls: ['./bidding-component.component.css']
})
export class BiddingComponentComponent implements OnInit {

  bids: any;
  @Input() usedOffer: any;
  constructor(private  biddingService: BiddingService ) { }

  ngOnInit() {
    this.getBids();
  }

  getBids() {

    this.biddingService.getBidds(this.usedOffer.id).subscribe(bids =>  this.bids = bids
    );

  }
  accept(item) {
    this.biddingService.accept(item).subscribe();

  }

}
