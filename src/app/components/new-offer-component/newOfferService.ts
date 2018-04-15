


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
    console.log(id);
    return this.http.delete('http://localhost:8080/api/newoffer/' + id);
  }
  addOffer(item: any) {
    return this.http.post('http://localhost:8080/api/newoffer/', item);
  }

  updateOffer(id: Number, item: any) {
    return this.http.put('http://localhost:8080/api/newoffer' + id , item);
  }

}

