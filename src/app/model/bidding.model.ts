import {UsedOffer} from '../components/used-offer-component/usedOfferInterface';
import {User} from './user.model';

export class Bid {
  constructor(public  bid: Number , public usedOffer: UsedOffer , public user: User) {

  }
}
