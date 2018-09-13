import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieGroupComponent } from './component/movie-group/movie-group.component';

const routes: Routes = [
    { path: 'index', component: MovieGroupComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
