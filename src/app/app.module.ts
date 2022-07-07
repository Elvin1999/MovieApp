import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CategoryComponent } from './category/category.component';
import { FooterComponent } from './footer/footer.component';
import { AlertifyService } from './services/alertify.services';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { CategoryCreateComponent } from './category-create/category-create.component';
import { AuthComponent } from './auth/auth.component';
import { AuthInterceptor } from './services/auth.interceptor';
import { AlertComponent } from './shared/alert/alert.component';
import { LoadingComponent } from './shared/loading/loading.component';
import { MoviesModule } from './movies/movies.module';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule, AppRoutingModule, ReactiveFormsModule,MoviesModule], // modules
  declarations: [
    AppComponent,
    NavbarComponent,
    CategoryComponent,
    FooterComponent,
    CategoryCreateComponent,
    AuthComponent,
    AlertComponent,
    LoadingComponent,
  ], //component  providers - services
  providers: [AlertifyService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
  bootstrap: [AppComponent], //starter component
})
export class AppModule { }
