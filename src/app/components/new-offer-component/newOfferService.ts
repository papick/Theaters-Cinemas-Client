


import {Injectable} from '@angular/core';

import {HttpClient} from '@angular/common/http';

@Injectable()
export class NewOfferService {

  constructor(private http: HttpClient) {
  }

  getNewOffer() {
    return this.http.get('http://localhost:8080/api/newoffer/');
  }

  deleteOffer(id: Number) {
    return this.http.delete('http://localhost:8080/api/newoffer/' + id);
  }
  addOffer(item: any) {
    return this.http.post('http://localhost:8080/api/newoffer/', item);
  }
}

