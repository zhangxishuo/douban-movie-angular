import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MovieService } from '../../service/movie.service';
import { Movie } from '../../model/movie';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

    control = new FormControl();
    options: string[];

    constructor(private movieService: MovieService) { }

    ngOnInit() {
        this.control.setValue('');
        this.getTop10Name();
    }

    getTop10Name(): void {
        this.movieService.getTop250()
            .subscribe((response) => {
                let movies = response.subjects.filter((movie, index) => {
                    if (index < 10) {
                        return true;
                    }
                });
                this.options = this.getMoviesName(movies);
            });
    }

    getMoviesName(movies: Movie[]): string[] {
        let movieNames = [];
        movies.forEach((movie) => {
            movieNames.push(movie.title);
        })
        return movieNames;
    }

    searchMovie(): void {
        this.options = [];
        console.log(this.control.value);
    }

}
