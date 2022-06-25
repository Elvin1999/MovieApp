import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { Category } from '../models/category';
import { AlertifyService } from '../services/alertify.services';
import { CategoryService } from '../services/category.service';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movie-create',
  templateUrl: './movie-create.component.html',
  styleUrls: ['./movie-create.component.css'],
  providers: [CategoryService, MovieService, AlertifyService]
})
export class MovieCreateComponent implements OnInit {
  categories: Category[];
  model: any = {categoryId:-1};
  constructor(private categoryService: CategoryService,
    private movieService: MovieService,
    private alertifyService: AlertifyService,
    private router: Router) { }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(data => {
      this.categories = data;
    });
  }

  createMovie() {

  //console.log(form);
   // console.log(form.controls["categoryId"].value);
   // console.log(form.value);
    //console.log(this.model);

    // if(title.value==""){
    //   this.alertifyService.error("You should write title");
    //   return;
    // }
    // if(title.value.length<5){
    //   this.alertifyService.warning("you should write at least 5 characters");
    //   return;
    // }
    // if(description.value==""){
    //   this.alertifyService.error("You should write description");
    //   return;
    // }
    // if(imageUrl.value==""){
    //   this.alertifyService.error("You should write imageUrl");
    //   return;
    // }
    // if(categoryId.value=="-1"){
    //   this.alertifyService.error("You should write category");
    //   return;
    // }

    const movie = {
      title:this.model.title,
      description:this.model.description,
      imageUrl:this.model.imageUrl,
      isPopular:false,
      datePublished:new Date().getTime(),
      categoryId:this.model.categoryId
    };

      this.movieService.createMovie(movie)
      .subscribe(data=>this.router.navigate(['/movies',data.id]));


  }

}
