import { Injectable } from '@angular/core';
import { Institution} from '../model/institution.model';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class InstitutionService {

  constructor(private http: HttpClient) {
  }

  getCinemas() {
    return this.http.get('http://localhost:8080/api/cinemas');
  }
  getTheaters() {
    return this.http.get('http://localhost:8080/api/theaters');
  }

  addCinema(institution:Institution){
    institution.type = 'Cinema';
    return this.http.post('http://localhost:8080/api/cinemas', institution );
  }

}
