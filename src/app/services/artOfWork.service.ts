import { Injectable } from '@angular/core';
import { ArtOfWork} from "../model/artOfWork.model";
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ArtOfWorkService {

  constructor(private http: HttpClient) {
  }

  getMovies(cinemaId : Number) {
    return this.http.get('http://localhost:8080/api/cinemas/' + cinemaId + '/movies');
  }
  getShows(theaterId : Number) {
    return this.http.get('http://localhost:8080/api/theaters/' + theaterId + '/theaters');
  }

  addMovie(cinemaId : Number ,movie : ArtOfWork){
    movie.type = 'Movie';
    return this.http.post('http://localhost:8080/api/cinemas/' + cinemaId + '/movies', movie );
  }

  deleteMovie(cinemaId : Number, id : Number){
    console.log('URL: ' +'http://localhost:8080/api/cinemas/' + cinemaId + '/movies/'+ id);

    return this.http.delete('http://localhost:8080/api/cinemas/' + cinemaId + '/movies/'+id);
  }

  updateMovie(cinemaId : Number, movie : ArtOfWork){
    console.log('URL: ' +'http://localhost:8080/api/cinemas/' + cinemaId + '/movies/'+movie.id);
    console.log('Body : ' + JSON.stringify(movie));
    return this.http.patch('http://localhost:8080/api/cinemas/' + cinemaId + '/movies/'+movie.id, movie);
  }
}
