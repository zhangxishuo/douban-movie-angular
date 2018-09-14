import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../service/movie.service';
import { Location } from '@angular/common';
import { Movie } from '../../model/movie';

@Component({
    selector: 'app-movie-detail',
    templateUrl: './movie-detail.component.html',
    styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

    movie: Movie;

    constructor(private route: ActivatedRoute,
                private location: Location,
                private movieService: MovieService) { }

    ngOnInit() {
        this.getMovie();
    }

    getMovie(): void {
        let id = this.route.snapshot.paramMap.get('id');
        this.movieService.getMovieById(id)
            .subscribe((movie) => {
                console.log(movie);
                this.movie = movie;
            });
    }

}
