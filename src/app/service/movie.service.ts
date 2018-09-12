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

    constructor(private http: HttpClient) {
        this.movies = [
            new Movie('碟中谍6：全面瓦解', {
                small: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2529365085.jpg',
                large: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2529365085.jpg',
                medium: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2529365085.jpg'
            }, {
                average: 8.3,
                stars: 45
            }),
            new Movie('勇敢往事', {
                small: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2524173793.jpg',
                large: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2524173793.jpg',
                medium: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2524173793.jpg'
            }, {
                average: 0,
                stars: 0
            }),
            new Movie('阿尔法：狼伴归途', {
                small: 'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2530871439.jpg',
                large: 'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2530871439.jpg',
                medium: 'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2530871439.jpg'
            }, {
                average: 6.5,
                stars: 35
            })
        ];
    }

    getMovies(): Observable<Response> {
        let url = 'https://douban.uieee.com/v2/movie/in_theaters';
        return this.http.get<Response>(url);
    }
}
