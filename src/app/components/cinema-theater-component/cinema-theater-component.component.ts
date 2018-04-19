import { Component, OnInit } from '@angular/core';
import {InstitutionService} from '../../services/institution.service';
import {Institution} from '../../model/institution.model';
import { Router} from '@angular/router';
@Component({
  selector: 'app-cinema-theater-component',
  templateUrl: './cinema-theater-component.component.html',
  styleUrls: ['./cinema-theater-component.component.css']
})
export class CinemaTheaterComponentComponent implements OnInit {
  institutions: any;
  displayAdd = false;
  displayEdit = false;

  constructor(private institutionService: InstitutionService, private router : Router) {

  }

  ngOnInit() {
    if(this.router.url === '/cinemas'){
      this.getCinemas();
    }
    else{
      this.getTheaters();
    }
  }

  getCinemas(){
    this.institutionService.getCinemas().subscribe( (list) => {
      this.institutions = list;
    });
  }

  getTheaters(){
    this.institutionService.getTheaters().subscribe( (list) => {
    this.institutions = list;
   });
  }

  addItem(item) {
    this.institutionService.addCinema(item.value).subscribe((ok) =>
    this.getCinemas())
  }

  deleteMovie(id: Number) {

    this.institutionService.deleteCinema(id).subscribe((ok) =>
    this.getCinemas());
  }
  updateItem(id: Number, item ) {
    /*this.institutionService.updateOffer(id, item.value).subscribe((ok) =>
      this.getOffers());*/
  }

  showDialog() {
    this.displayAdd = !this.displayAdd;
  }

}
