import { Injectable } from '@angular/core';
import { Institution} from '../model/institution.model';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class InstitutionService {

  constructor(private http:Http) {
  }

  getCinemas(){
    return this.http.get('/api/cinemas').map(res => res.json());
  }
  getTheaters(){
    return this.http.get('/api/theaters').map(res => res.json());
  }

}
