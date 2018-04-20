import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {InstitutionService} from '../../services/institution.service';


@Component({
  selector: 'app-institution-profile',
  templateUrl: './institution-profile.component.html',
  styleUrls: ['./institution-profile.component.css']
})
export class InstitutionProfileComponent implements OnInit {

  institution: any;
  institutionId : Number;
  constructor(private institutionService: InstitutionService,private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.route.params.subscribe(params => this.institutionId = +params['cinemaId']);
    this.getCinema();
  }

  getCinema() {
    this.institutionService.getCinema(this.institutionId).subscribe((institution) => {
      this.institution = institution;
    });
  }

}
