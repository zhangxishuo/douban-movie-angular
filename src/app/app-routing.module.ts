import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieGroupComponent } from './component/movie-group/movie-group.component';
import { MovieDetailComponent } from './component/movie-detail/movie-detail.component';

const routes: Routes = [
    { path: 'index', component: MovieGroupComponent },
    { path: 'movie/:id', component: MovieDetailComponent },
    { path: '', redirectTo: 'index', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
