import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatCardModule, MatGridList, MatGridListModule } from '@angular/material';

import { AppComponent } from './app.component';
import { MovieGroupComponent } from './component/movie-group/movie-group.component';
import { MovieItemComponent } from './component/movie-item/movie-item.component';
import { MovieStarComponent } from './component/movie-star/movie-star.component';

@NgModule({
    declarations: [
        AppComponent,
        MovieGroupComponent,
        MovieItemComponent,
        MovieStarComponent
    ],
    imports: [
        BrowserModule,
        MatCardModule,
        MatGridListModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
