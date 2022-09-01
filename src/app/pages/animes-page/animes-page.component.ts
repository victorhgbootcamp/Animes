
import { Component, OnInit } from '@angular/core';
import { AnimesService } from 'src/app/shared/services/animes.service';

@Component({
  selector: 'app-animes-page',
  templateUrl: './animes-page.component.html',
  styleUrls: ['./animes-page.component.scss']
})
export class AnimesPageComponent implements OnInit {
animes = [];
  constructor(private animesService: AnimesService) { }

  ngOnInit(): void {
    this.animesService.getAnimes().subscribe((res: any) =>{
      console.log(res)
       this.animes = res.data;
     });
  }

}
