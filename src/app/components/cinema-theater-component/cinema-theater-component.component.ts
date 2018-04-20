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
  institutionEdit: any;

  constructor(private institutionService: InstitutionService, private router : Router) {

  }

  ngOnInit() {
    this.institutionEdit = new Institution();
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

  deleteItem(id: Number) {

    this.institutionService.deleteCinema(id).subscribe((ok) =>
    this.getCinemas());
  }
  updateItem() {
    console.log(this.institutionEdit.id);
    /*this.institutionService.updateCinema(this.institutionEdit).subscribe((ok) =>
      this.getCinemas());*/
  }

  showDialog() {
    this.displayAdd = !this.displayAdd;
  }

  showEditDialog(itemEdit) {
    this.institutionEdit = itemEdit;
    this.showEdit();
  }
  showEdit(){
    this.displayEdit = !this.displayEdit;
  }

}
