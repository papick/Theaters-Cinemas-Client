import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.css']
})
export class HeaderComponentComponent implements OnInit {

  private loggedUser;

  constructor(private router: Router) {
    this.loggedUser = JSON.parse(localStorage.getItem('loggedUser'));
  }

  ngOnInit() {
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/home']);
    window.location.reload();
    this.loggedUser = null;

  }

}
