import {Component, OnInit} from '@angular/core';
import {AccountService} from '../../services/account.service';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private editMode: boolean;
  private loggedUser;
  private temp;

  constructor(private accountService: AccountService, private userService: UserService) {
    this.loggedUser = accountService.getLoggedUser();
    this.temp = JSON.parse(JSON.stringify(this.loggedUser));
    if (this.loggedUser !== null) {
      this.userService.getMyFriends(this.loggedUser).subscribe(friendList => {
        this.loggedUser.friendList = friendList;
        console.log(friendList);
      });
    }
  }

  ngOnInit() {
  }

  edit() {
    this.editMode = true;
  }

  back() {
    this.editMode = false;
    this.loggedUser = this.temp;
    console.log(this.loggedUser);

  }

  save() {
    this.editMode = false;
    this.accountService.updateUser(this.loggedUser).subscribe(user => {
        this.loggedUser = user;
      });
  }

  delete(friendship, id, idLogged) {
    let i = 0;
    for (const f of this.loggedUser.friendList) {
      i++;
      if (f.id === friendship.id) {
        this.loggedUser.friendList.splice(i - 1, 1);
        break;
      }
    }
    this.accountService.deleteFriend(friendship, idLogged).subscribe();
    document.getElementById(id).hidden = true;
  }

}
