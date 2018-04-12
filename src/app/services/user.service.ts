import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) {
  }


  getAllSearchedUsers(param: string) {
    return this.http.get('/api/user/searchedUser/' + param);
  }

  addFriend(user, sender) {
    return this.http.post('/api/user/addFriend', {'begin': sender, 'end': user});
  }

  getMyRequests(user) {
    return this.http.post('/api/user/getMyRequest', user);
  }

}
