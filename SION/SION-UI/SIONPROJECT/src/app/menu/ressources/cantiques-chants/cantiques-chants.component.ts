import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';
import { RessourceService } from '../service/ressource.service';
import { Ressource } from '../models/ressource-model';
import { Configuration } from '../../../configuration';

@Component({
  selector: 'pat-cantiques-chants',
  standalone: true,
  imports: [CommonModule, RouterLinkWithHref],
  templateUrl: './cantiques-chants.component.html',
  styleUrl: './cantiques-chants.component.css'
})
export class CantiquesChantsComponent implements OnInit, OnDestroy{
  videos: any[] = [];
  cantiques: Ressource[] = [];
  youtubeVideosNumber: number = 1;

  youtube: string = '- Cantiques depuis Youtube';
  isYoutube: boolean = true;
  isPublie: boolean = false;
  publie: string = "+ Cantiques écrites et publiées";

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

    this.ressourceService.getRessources()
      .subscribe({
        next: annonces => { this.cantiques = annonces; },
        error: err => console.log(err)
      })
  }
  
  toggle(g: string) {
    if (g === "Y") {
      this.isYoutube = !this.isYoutube;
      this.youtube = !this.isYoutube ? "+ Cantiques depuis Youtube" : "- Cantiques depuis Youtube";
    } else if (g === "P") {
      this.isPublie = !this.isPublie;
      this.publie = this.isPublie ? "- Cantiques écrits et publiés" : "+ Cantiques écrits et publiés";
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

    if (this.cantiques.length) {
      this.cantiques = [];
    }
  }
}
