import { Injectable } from '@angular/core';
import { Movie } from '../model/movie';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class MovieService {

    movies: Movie[];

    constructor() {
        this.movies = [
            new Movie('碟中谍6：全面瓦解', {
                small: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2529365085.jpg',
                large: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2529365085.jpg',
                'medium': 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2529365085.jpg'
            }),
            new Movie('勇敢往事', {
                small: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2524173793.jpg',
                large: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2524173793.jpg',
                'medium': 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2524173793.jpg'
            }),
            new Movie('碟中谍6：全面瓦解', {
                small: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2529365085.jpg',
                large: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2529365085.jpg',
                'medium': 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2529365085.jpg'
            }),
            new Movie('勇敢往事', {
                small: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2524173793.jpg',
                large: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2524173793.jpg',
                'medium': 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2524173793.jpg'
            }),
            new Movie('碟中谍6：全面瓦解', {
                small: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2529365085.jpg',
                large: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2529365085.jpg',
                'medium': 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2529365085.jpg'
            }),
            new Movie('勇敢往事', {
                small: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2524173793.jpg',
                large: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2524173793.jpg',
                'medium': 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2524173793.jpg'
            })
        ];
    }

    getMovies(): Observable<Movie[]> {
        return of(this.movies);
    }
}
