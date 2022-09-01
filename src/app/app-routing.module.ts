import { AnimeDetailPageComponent } from './pages/animes-page/pages/anime-detail-page/anime-detail-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimesPageComponent } from './pages/animes-page/animes-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

const routes: Routes = [
{path:"", component: HomePageComponent},
{path: "animes", component: AnimesPageComponent},
{path: "animes/:idAnime", component: AnimeDetailPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
