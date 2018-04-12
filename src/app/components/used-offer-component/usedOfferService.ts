import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()
export class UsedOfferService {

  constructor(private http: HttpClient) {}

  getUsedOffer() {
    return this.http.get('http://localhost:8080/api/usedoffer/');
  }
}
