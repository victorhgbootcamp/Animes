import { AnimesService } from 'src/app/shared/services/animes.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-anime-detail-page',
  templateUrl: './anime-detail-page.component.html',
  styleUrls: ['./anime-detail-page.component.scss']
})
export class AnimeDetailPageComponent implements OnInit {
anime: any = {}
  constructor(private route: ActivatedRoute, private animesService: AnimesService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const idAnime = params.get("idAnime");
      this.animesService.getAnime(idAnime).subscribe((res: any) => {
        this.anime = res.data
        console.log(res.data)
    })
    
    })

  }

}
