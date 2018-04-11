import { Component, OnInit } from '@angular/core';
import {InstitutionService} from '../../services/institution.service';
import {Institution} from '../../model/institution.model';
@Component({
  selector: 'app-cinema-theater-component',
  templateUrl: './cinema-theater-component.component.html',
  styleUrls: ['./cinema-theater-component.component.css']
})
export class CinemaTheaterComponentComponent implements OnInit {
  public institutions: Institution[];

  constructor(private institutionService: InstitutionService) {
    this.institutionService.getCinemas().subscribe( (list) => {
      this.institutions = list;
    });

    //this.institutionService.getTheaters().subscribe( (list) => {
    //  this.institutions = list;
  //  });

  }

  ngOnInit() {

  }
}
