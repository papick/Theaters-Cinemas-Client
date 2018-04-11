import {Component, OnInit} from '@angular/core';
import {AccountService} from '../../services/account.service';
import {Friendship} from '../../model/friendship.model';
import {User} from '../../model/user.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private editMode: boolean;
  private loggedUser;
  private temp;

  constructor(private accountService: AccountService) {
    this.loggedUser = AccountService.getLoggedUser();
    this.temp = JSON.parse(JSON.stringify(this.loggedUser));
  }

  ngOnInit() {
    this.loggedUser.friendList.push(new Friendship(1, new User(1, 'mail', '123', 'Pera', 'Peric'),
      this.loggedUser, new User(1, 'mail', '123', 'Pera', 'Peric'), 1));
    this.loggedUser.friendList.push(new Friendship(2, new User(1, 'mail', '123', 'Jova', 'JOvic'),
      this.loggedUser, new User(1, 'mail', '123', 'Jova', 'JOvic'), 1));
    this.loggedUser.friendList.push(new Friendship(3, new User(1, 'mail', '123', 'MIka', 'MIkic'),
      this.loggedUser, new User(1, 'mail', '123', 'MIka', 'MIkic'), 1));
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
    console.log(this.loggedUser);
    this.accountService.updateUser(this.loggedUser).subscribe(user => {
      this.loggedUser = user;
    });
  }

  delete(friendship) {
    let i = 0;
    for (const f of this.loggedUser.friendList) {
      i++;
      if (f.id === friendship.id) {
        this.loggedUser.friendList.splice(i - 1 , 1);
        break;
      }
    }
    this.accountService.deleteFriend(friendship).subscribe();
  }

}
