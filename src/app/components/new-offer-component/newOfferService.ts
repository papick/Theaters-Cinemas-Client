


import {Injectable} from '@angular/core';

import {HttpClient} from '@angular/common/http';

@Injectable()
export class NewOfferService {

  constructor(private http: HttpClient) {
  }

  getNewOffer() {
    return this.http.get('http://localhost:8080/api/newoffer/');
  }

  /*deleteOffer(){
    return this.http.delete("http://localhost:8080/api/newoffer/{}")
  */

}

