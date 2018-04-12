import { Component, OnInit } from '@angular/core';
import {User} from '../../model/user.model';
import {AccountService} from '../../services/account.service';

@Component({
  selector: 'app-register-form-component',
  templateUrl: './register-form-component.component.html',
  styleUrls: ['./register-form-component.component.css']
})
export class RegisterFormComponentComponent implements OnInit {

  private user: User;
  private firstPass: string;
  constructor(private accountService: AccountService) {
    this.user = new User();
    this.firstPass = '';
  }

  ngOnInit() {
  }

  register() {
    this.accountService.register(this.user).subscribe();
  }

}
