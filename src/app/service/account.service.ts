import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../model/user.model';

@Injectable()
export class AccountService {

  constructor(private http: HttpClient) { }


  register(user: User) {
    return this.http.post('/api/user/registrate', user);
  }

  login(loginObject: any) {
    return this.http.post('/api/user/login', loginObject);
  }
}
