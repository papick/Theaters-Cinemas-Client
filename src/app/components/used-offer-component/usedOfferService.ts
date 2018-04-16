import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()
export class UsedOfferService {

  constructor(private http: HttpClient) {}

  getUsedOffer() {
    return this.http.get('http://localhost:8080/api/usedoffer/');
  }
  deleteUsedOffer(id: Number) {
    console.log(id);
    return this.http.delete('http://localhost:8080/api/usedoffer/' + id);
  }
  addUsedOffer(item: any) {
    return this.http.post('http://localhost:8080/api/usedoffer/', item);
  }

  updateUsedOffer(id: Number, item: any) {
    return this.http.put('http://localhost:8080/api/usedoffer' + id , item);
  }
}
