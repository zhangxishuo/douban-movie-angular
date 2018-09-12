import { Component, OnInit } from '@angular/core';
import { Movie } from '../../model/movie';
import { MovieService } from '../../service/movie.service';

@Component({
    selector: 'app-movie-group',
    templateUrl: './movie-group.component.html',
    styleUrls: ['./movie-group.component.css']
})
export class MovieGroupComponent implements OnInit {

    movies: Movie[];

    constructor(private movieService: MovieService) { }

    ngOnInit() {
        this.getMovies();
    }

    getMovies(): void {
        this.movieService.getMovies()
            .subscribe(data => this.movies = data.subjects);
    }

}
