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
    option: object;

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
                this.movie = movie;
                this.renderChart(movie.rating.details);
            });
    }

    renderChart(details: object): void {
        let keys = [];
        let values = [];
        let sum = 0;
        for (let key in details) {
            keys.push(key + '星');
            sum += details[key];
            values.push(details[key]);
        }
        values.forEach((value, index) => {
            values[index] = Math.round(value / sum * 10000) / 100;
        });
        this.option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                },
                formatter: '{c}%'
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'value',
                boundaryGap: [0, 0.01],
                axisLabel: {
                    formatter: '{value} %'
                }
            },
            yAxis: {
                type: 'category',
                data: keys
            },
            series: [
                {
                    type: 'bar',
                    data: values
                }
            ]
        };
    }

}
