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
    document.clear();
    return this.http.post('http://localhost:8080/api/user/registrate', user);
  }

  login(loginObject: any) {
    return this.http.post('http://localhost:8080/api/user/login', loginObject);
  }

  updateUser(loginObject: any) {
    return this.http.put('/api/user/updateUser', loginObject);
  }

  deleteFriend(friendship: Friendship, idLogged: number) {
    return this.http.delete('/api/user/removeFriend?id1=' + friendship.id + '&id2=' + idLogged);
  }

}
