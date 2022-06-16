import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie';
import { MovieRepository } from '../models/movie.repository';
import { AlertifyService } from '../services/alertify.services';
import { MovieService } from '../services/movie.service';
declare let alertify: any;
//var alertify = require('../alertify.js');

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
  providers:[MovieService]
})
export class MoviesComponent implements OnInit {
  title: string = 'Movie List';
  movies: Movie[]=[];
  popularMovies: Movie[]=[];
  //filteredMovies: Movie[];
  filterText: string = '';

  constructor(private alertifyService:AlertifyService,private movieService:MovieService) {
   
  }
  ngOnInit() {

    this.movieService.getMovies().subscribe(data=>{
      this.movies=data;
    })

    // this.http.get<Movie[]>("http://localhost:3000/movies").subscribe(data=>{
    //   this.movies=data;
    //   console.log(this.movies);
    // });

    // this.http.get("https://jsonplaceholder.typicode.com/users").subscribe(data=>{
    //   console.log(data);
    // });

  }

  OnInputChange() {
  
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
