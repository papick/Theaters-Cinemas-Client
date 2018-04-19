import { Component, OnInit } from '@angular/core';
import {ArtOfWorkService} from '../../services/artOfWork.service';
import {ArtOfWork} from '../../model/artOfWork.model';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-repertory',
  templateUrl: './repertory.component.html',
  styleUrls: ['./repertory.component.css']
})
export class RepertoryComponent implements OnInit {

  artOfWorks: any;
  displayAdd = false;
  displayEdit = false;
  cinemaId: Number;
  constructor(private artOfWorkService: ArtOfWorkService,private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.route.params.subscribe(params => this.cinemaId = +params['cinemaId']);
    this.getMovies();
  }

  getMovies(){
    this.artOfWorkService.getMovies(this.cinemaId).subscribe( (list) => {
      this.artOfWorks = list;
    });
  }

  addMovie(item) {
    this.artOfWorkService.addMovie(this.cinemaId ,item.value).subscribe((ok) =>
    this.getMovies())
  }

  deleteItem(id: Number) {
    /*
    this.institutionService.deleteOffer(id).subscribe((ok) =>
    this.getOffers());*/
  }
  updateItem(id: Number, item ) {
    /*this.institutionService.updateOffer(id, item.value).subscribe((ok) =>
      this.getOffers());*/
  }

  showDialog() {
    this.displayAdd = !this.displayAdd;
  }


}
