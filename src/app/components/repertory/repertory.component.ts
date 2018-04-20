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
  displayForm = false;
  editMode = false;
  cinemaId: Number;
  artOfWork : ArtOfWork;
  constructor(private artOfWorkService: ArtOfWorkService,private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.artOfWork = new ArtOfWork();
    this.route.params.subscribe(params => this.cinemaId = +params['cinemaId']);
    this.getArtOfWorks();
  }


  getArtOfWorks(){
    this.artOfWorkService.getMovies(this.cinemaId).subscribe( (list) => {
      this.artOfWorks = list;
    });
  }


  addMovie(item) {
    this.artOfWorkService.addMovie(this.cinemaId ,item.value).subscribe((ok) =>
    this.getArtOfWorks())
  }

  deleteMovie(id: Number) {

    this.artOfWorkService.deleteMovie(this.cinemaId ,id).subscribe((ok) =>
    this.getArtOfWorks());
  }

  showDialog(artOfWork) {

    if(artOfWork){
      console.log(JSON.stringify(artOfWork));
      this.artOfWork = artOfWork;
      this.editMode = true;
    }else{
      console.log(JSON.stringify(artOfWork));
      this.artOfWork = new ArtOfWork();
    }
    this.justShow();
  }

  justShow(){
    this.displayForm = !this.displayForm;
  }
  save(){
    if(this.editMode){
      this.artOfWorkService.updateMovie(this.cinemaId ,this.artOfWork).subscribe((ok) =>
        this.getArtOfWorks());
        this.editMode = false;
    }else{
      this.artOfWorkService.addMovie(this.cinemaId ,this.artOfWork).subscribe((ok) =>
      this.getArtOfWorks());
    }
  }


}
