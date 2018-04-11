import {Component, OnInit} from '@angular/core';
import {User} from '../../model/user.model';
import {UserService} from '../../services/user.service';
import {AccountService} from '../../services/account.service';

@Component({
  selector: 'app-people-component',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  private people: any;
  private searchString: string;

  constructor(private userService: UserService, private accService: AccountService) {
  }

  ngOnInit() {

  }

  search() {
    this.userService.getAllSearchedUsers(this.searchString).subscribe(users => {
      this.people = users;
    });
  }

  addFriend(user: User) {
    console.log(AccountService.getLoggedUser());
    this.userService.addFriend(user, AccountService.getLoggedUser()).subscribe();
  }

}
