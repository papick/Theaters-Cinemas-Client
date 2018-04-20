import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class BiddingService{

  constructor(private http: HttpClient) {}

  getBidds(usedOfferId: Number) {
    return this.http.get('http://localhost:8080/api/usedoffer/' + usedOfferId + '/bid');
  }

  addBid(item) {
    const user = localStorage.getItem('loggedUser');
    item.customer = JSON.parse(user);
    // console.log(JSON.stringify(item));

    return this.http.post('http://localhost:8080/api/usedoffer/' + item.usedOffer.id + '/bid/', item);
  }

}
