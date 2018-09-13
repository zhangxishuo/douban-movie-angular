import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatCardModule, MatGridListModule, MatIconModule, MatButtonModule, MatToolbarModule, MatButtonToggleModule } from '@angular/material';

import { AppComponent } from './app.component';
import { MovieGroupComponent } from './component/movie-group/movie-group.component';
import { MovieItemComponent } from './component/movie-item/movie-item.component';
import { MovieStarComponent } from './component/movie-star/movie-star.component';
import { HttpClientModule } from '@angular/common/http';
import { DirectorPipe } from './pipe/director.pipe';
import { LeadingRolePipe } from './pipe/leading-role.pipe';
import { TypePipe } from './pipe/type.pipe';
import { MenuComponent } from './component/menu/menu.component';

@NgModule({
    declarations: [
        AppComponent,
        MovieGroupComponent,
        MovieItemComponent,
        MovieStarComponent,
        DirectorPipe,
        LeadingRolePipe,
        TypePipe,
        MenuComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        MatCardModule,
        MatGridListModule,
        MatIconModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatToolbarModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
