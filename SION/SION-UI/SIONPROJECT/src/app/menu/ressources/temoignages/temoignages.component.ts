import { Component, OnDestroy, OnInit } from '@angular/core';
import { RessourceService } from '../service/ressource.service';
import { Configuration } from '../../../configuration';
import { CommonModule } from '@angular/common';
import { Ressource } from '../models/ressource-model';
import { CorepComponent } from "../../../popup/core/core-p.component";
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-temoignages',
  standalone: true,
  imports: [CommonModule, CorepComponent, RouterLinkWithHref],
  templateUrl: './temoignages.component.html',
  styleUrl: './temoignages.component.css'
})
export class TemoignagesComponent implements OnInit, OnDestroy {

  videos: any[] = [];
  temoignes: Ressource[] = [];
  youtubeVideosNumber: number = 1;

  youtube: string = '- Témoignages depuis Youtube';
  isYoutube: boolean = true;
  isPublie: boolean = false;
  publie: string = "+ Témoignages écrits et publiés";

  myRessource: Ressource | undefined;
  isPopupVisible = false;

  IMG: string = Configuration.IMG;
  VID: string = Configuration.VID;

  constructor(private ressourceService: RessourceService) { }

  ngOnInit(): void {
    this.videos = [];
    this.youtubeVideosNumber = Configuration.Youtube_VIDEOS_NUMBER;

    this.ressourceService
      .getVideosForChanelByRessources(Configuration.Youtube_CHANNEL_NAME, this.youtubeVideosNumber,'TTT')
      .subscribe({
        next: videos => {
          this.videos = videos["items"];
          console.log(this.videos)
        },
        error: err => console.log(err)
      })

    this.ressourceService.getRessources('T')
      .subscribe({
        next: temoignes => { this.temoignes = temoignes; console.log("Ressources - TEMOIGNAGES ==>"); },
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

  toggle(g: string) {
    if (g === "Y") {
      this.isYoutube = !this.isYoutube;
      this.youtube = !this.isYoutube ? "+ Témoignages depuis Youtube" : "- Témoignages depuis Youtube";
    } else if (g === "P") {
      this.isPublie = !this.isPublie;
      this.publie = this.isPublie ? "- Témoignages écrits et publiés" : "+ Témoignages écrits et publiés";
    }
  }

  showPopup(rsc: Ressource) {
    this.isPopupVisible = true;
    if (rsc) {
      this.myRessource = rsc;
    }
  }

  hidePopup() {
    this.isPopupVisible = false;
  }

  ngOnDestroy(): void {
    if (this.videos.length) {
      this.videos = [];
    }

    if (this.temoignes.length) {
      this.temoignes = [];
    }
  }
}
