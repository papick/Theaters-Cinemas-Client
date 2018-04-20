import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) {
    this.http = http;
  }


  getAllSearchedUsers(param: string) {
    return this.http.get('http://localhost:8080/api/user/searchedUser/' + param);
  }

  addFriend(user, sender) {
    return this.http.post('http://localhost:8080/api/user/addFriend', {'begin': sender, 'end': user});
  }

  getMyRequests(user) {
    return this.http.post('http://localhost:8080/api/user/getMyRequest', user);
  }

  confirmFriend(user, sender) {
    return this.http.post('http://localhost:8080/api/user/friendship/changeStatusInAccept', {'begin': sender, 'end': user});
  }

  declineFriend(user, sender) {
    console.log(user + ' , ' + sender);
    return this.http.post('http://localhost:8080/api/user/friendship/changeStatusInIgnore', {'begin': sender, 'end': user});
  }

  getMyFriends(user) {
    return this.http.get('http://localhost:8080/api/user/getMyFriends/' + user.id);
  }

  inviteFriend(friendship) {
  }

}
