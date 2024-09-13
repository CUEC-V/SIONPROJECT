import { Component, OnDestroy, OnInit } from '@angular/core';
import { RessourceService } from '../service/ressource.service';
import { Configuration } from '../../../configuration';
import { CommonModule } from '@angular/common';
import { Ressource } from '../models/ressource-model';

@Component({
  selector: 'app-temoignages',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './temoignages.component.html',
  styleUrl: './temoignages.component.css'
})
export class TemoignagesComponent implements OnInit, OnDestroy {
  videos: any[] = [];
  temoignes: Ressource[] = [];
  youtubeVideosNumber: number = 1;

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
        next: temoignes => { this.temoignes = temoignes;console.log("Ressources - temoignages ==>"); console.log(this.temoignes) },
        error: err => console.log(err)
      })
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

    if(this.temoignes.length){
      this.temoignes = [];
    }
  }
}
