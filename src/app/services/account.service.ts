import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../model/user.model';
import {Friendship} from '../model/friendship.model';

@Injectable()
export class AccountService {

  constructor(private http: HttpClient) {
  }

  static getLoggedUser() {
    return JSON.parse(localStorage.getItem('loggedUser'));
  }

  register(user: User) {
    return this.http.post('http://localhost:8080/api/user/registrate', user);
  }

  login(loginObject: any) {
    return this.http.post('http://localhost:8080/api/allusers/login', loginObject);
  }

  updateUser(loginObject: any) {
    return this.http.put('http://localhost:8080/api/user/updateUser', loginObject);
  }

  updateAllUser(id: Number, loginObject: any) {
    return this.http.put('http://localhost:8080/api/allusers/updateUser/' + id , loginObject);
  }

  deleteFriend(friendship: Friendship) {
    return this.http.delete('/api/user/removeFriend/' + friendship.id);
  }

}
