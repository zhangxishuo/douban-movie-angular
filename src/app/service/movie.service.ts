import { Injectable } from '@angular/core';
import { Movie } from '../model/movie';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Response } from '../model/response';

@Injectable({
    providedIn: 'root'
})
export class MovieService {

    movies: Movie[];

    baseUrl: string;

    commonData: {
        movieName: string
    };

    constructor(private http: HttpClient) {
        // this.baseUrl = 'https://api.douban.com/v2/movie/';
        this.baseUrl = 'https://douban.uieee.com/v2/movie/';
    }

    getMovies(): Observable<Response> {
        let url = this.baseUrl + 'in_theaters';
        return this.http.get<Response>(url);
    }

    getTop250(): Observable<Response> {
        let url = this.baseUrl + 'top250';
        return this.http.get<Response>(url);
    }

    getMovieById(id: string): Observable<Movie> {
        let url = this.baseUrl + 'subject/' + id;
        return this.http.get<Movie>(url);
    }
}
