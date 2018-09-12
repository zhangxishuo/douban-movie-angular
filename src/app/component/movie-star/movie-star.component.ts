import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-movie-star',
    templateUrl: './movie-star.component.html',
    styleUrls: ['./movie-star.component.css']
})
export class MovieStarComponent implements OnInit {

    @Input()
    grade: number;

    @Input()
    starLevel: number;

    starArray: number[];
    starHalfArray: number[];
    starBorderArray: number[];

    constructor() {
        this.starArray = [];
        this.starHalfArray = [];
        this.starBorderArray = [];
    }

    ngOnInit() {
        this.analyseStarLevel();
    }

    analyseStarLevel(): void {
        let starLength = 0;
        let starHalfLength = 0;
        let starBorderLength = 0;
        if (this.starLevel % 10 !== 0) {
            starHalfLength = 1;
        }
        starLength = Math.floor(this.starLevel / 10);
        starBorderLength = 5 - starLength - starHalfLength;
        this.createArray(starLength, starHalfLength, starBorderLength);
    }

    createArray(starLength: number, starHalfLength: number, starBorderLength: number): void {
        let i;
        for (i = 0; i < starLength; i ++) {
            this.starArray.push(i);
        }
        for (i = 0; i < starHalfLength; i ++) {
            this.starHalfArray.push(i);
        }
        for (i = 0; i < starBorderLength; i ++) {
            this.starBorderArray.push(i);
        }
    }

}
