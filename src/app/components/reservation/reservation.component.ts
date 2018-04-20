import {Component, OnInit} from '@angular/core';
import {AccountService} from '../../services/account.service';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  private loggedUser;

  constructor(private accountService: AccountService, private userService: UserService) {
    this.loggedUser = accountService.getLoggedUser();
    if (this.loggedUser !== null) {
      this.userService.getMyFriends(this.loggedUser).subscribe(friendList => {
        this.loggedUser.friendList = friendList;
        console.log(friendList);
      });
    }
  }

  ngOnInit() {
  }

  invite(friendship, id, idLogged) {
    this.userService.inviteFriend(friendship);
  }

}
