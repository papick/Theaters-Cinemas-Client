import {Component, OnInit} from '@angular/core';
import {AccountService} from '../../services/account.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-log-in-form-component',
  templateUrl: './log-in-form-component.component.html',
  styleUrls: ['./log-in-form-component.component.css']
})
export class LogInFormComponentComponent implements OnInit {

  private loginObject: any;

  constructor(private accountService: AccountService, private router: Router) {
    this.loginObject = {email: '', password: ''};
  }

  ngOnInit() {
  }

  login() {
    console.log(this.loginObject);
    this.accountService.login(this.loginObject).subscribe(user => {
      if (user === null) {
        alert('Bad username or pass');
        return;
      }
      localStorage.setItem('loggedUser', JSON.stringify(user));
      console.log(localStorage);

      this.router.navigate(['/home']);
      window.location.reload();

    });
  }

}
