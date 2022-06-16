import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { MoviesComponent } from './movies/movies.component';


const routes:Routes=[
  {path:'movies',component:MoviesComponent},
  {path:'movies/category/:categoryId',component:MoviesComponent},
  {path:'',redirectTo:'movies',pathMatch:'full'},
]
@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
