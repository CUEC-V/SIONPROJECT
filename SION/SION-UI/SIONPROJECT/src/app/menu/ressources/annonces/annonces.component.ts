import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';
import { RessourceService } from '../service/ressource.service';
import { Ressource } from '../models/ressource-model';
import { Configuration } from '../../../configuration';

@Component({
  selector: 'pat-cantiques',
  standalone: true,
  imports: [CommonModule, RouterLinkWithHref],
  templateUrl: './annonces.component.html',
  styleUrl: './annonces.component.css'
})
export class AnnoncesComponent implements OnInit, OnDestroy {
  videos: any[] = [];
  annonces: Ressource[] = [];
  youtubeVideosNumber: number = 1;

  youtube: string = '- Annonces depuis Youtube';
  isYoutube: boolean = true;
  isPublie: boolean = false;
  publie: string = "+ Annonces écrites et publiées";

  constructor(private ressourceService: RessourceService) { }

  ngOnInit(): void {
    this.videos = [];
    this.youtubeVideosNumber = Configuration.Youtube_VIDEOS_NUMBER;

    this.ressourceService
      .getVideosForChanel(Configuration.Youtube_CHANNEL_NAME, this.youtubeVideosNumber)
      .subscribe({
        next: videos => { this.videos = videos["items"]; console.log(this.videos) },
        error: err => console.log(err)
      }
      )

    this.ressourceService.getRessources('A')
      .subscribe({
        next: annonces => { this.annonces = annonces; },
        error: err => console.log(err)
      })
  }

  toggle(g: string) {
    if (g === "Y") {
      this.isYoutube = !this.isYoutube;
      this.youtube = !this.isYoutube ? "+ Annonces depuis Youtube" : "- Annonces depuis Youtube";
    } else if (g === "P") {
      this.isPublie = !this.isPublie;
      this.publie = this.isPublie ? "- Annonces écrites et publiées" : "+ Annonces écrites et publiées";
    }
  }

  afficherplus(n: number) {
    this.youtubeVideosNumber += Configuration.Youtube_VIDEOS_NUMBER;
    console.log(this.youtubeVideosNumber);
    this.ressourceService
      .getVideosForChanel(Configuration.Youtube_CHANNEL_NAME, this.youtubeVideosNumber)
      .subscribe({
        next: videos => { this.videos = videos["items"]; console.log(this.videos) },
        error: err => console.log(err)
      })
  }

  ngOnDestroy(): void {
    if (this.videos.length) {
      this.videos = [];
    }

    if (this.annonces.length) {
      this.annonces = [];
    }
  }
}
