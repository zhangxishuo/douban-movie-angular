import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule, MatGridListModule, MatIconModule, MatButtonModule, MatToolbarModule, MatButtonToggleModule, MatInputModule, MatAutocompleteModule } from '@angular/material';

import { EchartsNg2Module } from 'echarts-ng2';
import { AppComponent } from './app.component';
import { MovieGroupComponent } from './component/movie-group/movie-group.component';
import { MovieItemComponent } from './component/movie-item/movie-item.component';
import { MovieStarComponent } from './component/movie-star/movie-star.component';
import { HttpClientModule } from '@angular/common/http';
import { DirectorPipe } from './pipe/director.pipe';
import { LeadingRolePipe } from './pipe/leading-role.pipe';
import { TypePipe } from './pipe/type.pipe';
import { MenuComponent } from './component/menu/menu.component';
import { SearchComponent } from './component/search/search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './component/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { MovieDetailComponent } from './component/movie-detail/movie-detail.component';

@NgModule({
    declarations: [
        AppComponent,
        MovieGroupComponent,
        MovieItemComponent,
        MovieStarComponent,
        DirectorPipe,
        LeadingRolePipe,
        TypePipe,
        MenuComponent,
        SearchComponent,
        FooterComponent,
        MovieDetailComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatCardModule,
        MatGridListModule,
        MatIconModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatToolbarModule,
        MatInputModule,
        MatAutocompleteModule,
        ReactiveFormsModule,
        AppRoutingModule,
        EchartsNg2Module
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
