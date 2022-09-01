import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnimesService {

  constructor(private http: HttpClient) { }
  getAnimes(){
    return this.http.get("https://kitsu.io/api/edge/anime");
  }

getAnime(idAnime: any){
  return this.http.get("https://kitsu.io/api/edge/anime/" + idAnime)

}

}
