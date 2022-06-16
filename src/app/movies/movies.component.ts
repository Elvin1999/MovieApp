import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie';
import { MovieRepository } from '../models/movie.repository';
import { AlertifyService } from '../services/alertify.services';
declare let alertify: any;
//var alertify = require('../alertify.js');

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit {
  title: string = 'Movie List';
  movies: Movie[];
  popularMovies: Movie[];
  // filteredMovies: Movie[];
  movieRepository: MovieRepository;
  filterText: string = '';

  constructor(private alertifyService:AlertifyService) {
    this.movieRepository = new MovieRepository();
    this.movies = this.movieRepository.getMovies();
    //this.movies.length=0;
    this.popularMovies = this.movieRepository.getPopularMovies();
  }
  ngOnInit() {}

  OnInputChange() {
   // this.filteredMovies = this.filterText
      // ? this.movies.filter(
      //     (m: Movie) =>
      //       m.title.toLocaleLowerCase().indexOf(this.filterText) !== -1 ||
      //       m.description.toLocaleLowerCase().indexOf(this.filterText) !== -1
      //   )
      // : this.movies;
  }

  addToList($event: any, item: Movie) {
    if ($event.target.classList.contains('btn-primary')) {
      $event.target.innerText = 'Remove List';
      $event.target.classList.remove('btn-primary');
      $event.target.classList.add('btn-danger');
      this.alertifyService.success(item.title + ' added to list');
    } else {
      $event.target.innerText = 'Add To List';
      $event.target.classList.remove('btn-danger');
      $event.target.classList.add('btn-primary');
      this.alertifyService.warning(item.title + ' removed from list');
    }
  }
}
