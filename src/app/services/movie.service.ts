import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, tap, throwError } from "rxjs";
import { Movie } from "../models/movie";

@Injectable()
export class MovieService {
    url = "http://localhost:3000/movies";
    constructor(private http: HttpClient) {

    }

    getMovies(categoryId:number): Observable<Movie[]> {
        let newUrl=this.url;
        if(categoryId){
            newUrl+='?categoryId='+categoryId;
        }
        return this.http.get<Movie[]>(newUrl)
            .pipe(
                tap(data => console.log(data)),
                catchError(this.handleError)
            );
    }


    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            //client or network
            console.log("Error : " + error.error.message);
        }
        else {
            switch (error.status) {
                case 404:
                    console.log("Not Found");
                    break;
                case 403:
                    console.log("Access Denied");
                    break;
                case 500:
                    console.log("Internal server");
                    break;
                default:
                    console.log("some unknow error happened");
            }
        }
        return throwError(() => new Error("some error happened"));
    }

}