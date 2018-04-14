import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
import {AccountService} from '../../services/account.service';
import {User} from '../../model/user.model';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {

  private requests: any;

  constructor(private userService: UserService, private accService: AccountService) {
  }

  ngOnInit() {
    this.userService.getMyRequests(AccountService.getLoggedUser()).subscribe(reqs => this.requests = reqs);
  }

  confirm(user: User) {
    this.userService.confirmFriend(user, AccountService.getLoggedUser());
  }

  decline(user: User) {
    this.userService.declineFriend(user, AccountService.getLoggedUser());
  }
}
