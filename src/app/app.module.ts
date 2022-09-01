import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AnimesPageComponent } from './pages/animes-page/animes-page.component';
import { GalleryComponent } from './shared/components/gallery/gallery.component';
import { AnimeDetailPageComponent } from './pages/animes-page/pages/anime-detail-page/anime-detail-page.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AnimesPageComponent,
    GalleryComponent,
    AnimeDetailPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
