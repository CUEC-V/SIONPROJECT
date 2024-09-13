import { Component, OnDestroy, OnInit } from '@angular/core';
import { RessourceService } from '../service/ressource.service';
import { Ressource } from '../models/ressource-model';
import { CommonModule } from '@angular/common';
import { TemoinFilsComponent } from "./temoin-fils/temoin-fils.component";
import { Configuration } from '../../../configuration';

@Component({
  selector: 'app-gestion',
  standalone: true,
  imports: [CommonModule, TemoinFilsComponent],
  templateUrl: './gestion.component.html',
  styleUrl: './gestion.component.css'
})
export class GestionComponent implements OnInit, OnDestroy {

  videos: any[] = [];
  youtubeVideosNumber: number = 1;
  temoignages: Ressource[] = [];

  constructor(private ressourceService: RessourceService) { }

  ngOnInit(): void {
    this.ressourceService.getRessources().subscribe({
      next: ressources => this.temoignages = ressources,
      error: err => console.log(err)
    });

    this.videos = [];
    this.youtubeVideosNumber = Configuration.Youtube_VIDEOS_NUMBER;

    this.ressourceService
      .getVideosForChanel(Configuration.Youtube_CHANNEL_NAME, this.youtubeVideosNumber)
      .subscribe({
        next: videos => { this.videos = videos["items"]; console.log(this.videos) },
        error: err => console.log(err)
      }
      )
  }

  afficherplus(arg0: number) {
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
    if (this.temoignages.length) {
      this.temoignages = [];
    }
  }

}
