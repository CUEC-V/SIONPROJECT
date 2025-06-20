import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';
import { RessourceService } from '../service/ressource.service';
import { Ressource } from '../models/ressource-model';
import { Configuration } from '../../../configuration';
import { CorepComponent } from "../../../popup/core/core-p.component";

@Component({
  selector: 'pat-cantiques-chants',
  standalone: true,
  imports: [CommonModule, RouterLinkWithHref, CorepComponent],
  templateUrl: './cantiques-chants.component.html',
  styleUrl: './cantiques-chants.component.css'
})
export class CantiquesChantsComponent implements OnInit, OnDestroy {
  videos: any[] = [];
  cantiques: Ressource[] = [];
  youtubeVideosNumber: number = 1;

  youtube: string = '- Cantiques depuis Youtube';
  isYoutube: boolean = true;
  isPublie: boolean = false;
  publie: string = "+ Cantiques écrites et publiées";

  myRessource: Ressource | undefined;
  isPopupVisible = false;

  IMG: string = Configuration.IMG;
  VID: string = Configuration.VID;

  constructor(private ressourceService: RessourceService) { }

  ngOnInit(): void {
    this.videos = [];
    this.youtubeVideosNumber = Configuration.Youtube_VIDEOS_NUMBER;
//https://medium.com/@ericlaitman/using-youtube-data-api-to-search-for-any-video-5b66b01d727b
    this.ressourceService
    .getVideosForChanelByRessources(Configuration.Youtube_CHANNEL_NAME, this.youtubeVideosNumber,'CCC')
      .subscribe({
        next: videos => {
          this.videos = videos["items"]/*.filter((c: any) => c.snippet.title?.startsWith("CCC"))*/;
          console.log(this.videos)
        },
        error: err => console.log(err)
      }
      )

    this.ressourceService.getRessources('C')
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

    if (this.cantiques.length) {
      this.cantiques = [];
    }
  }
}
