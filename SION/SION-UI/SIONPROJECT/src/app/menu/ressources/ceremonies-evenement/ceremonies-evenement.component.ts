import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';
import { RessourceService } from '../service/ressource.service';
import { Ressource } from '../models/ressource-model';
import { Configuration } from '../../../configuration';
import { CorepComponent } from "../../../popup/core/core-p.component";

@Component({
  selector: 'app-ceremonies-evenement',
  standalone: true,
  imports: [CommonModule, RouterLinkWithHref, CorepComponent],
  templateUrl: './ceremonies-evenement.component.html',
  styleUrl: './ceremonies-evenement.component.css'
})
export class CeremoniesEvenementComponent implements OnInit, OnDestroy {
  videos: any[] = [];
  ceremonies: Ressource[] = [];
  youtubeVideosNumber: number = 1;

  youtube: string = '- Cérémonies depuis Youtube';
  isYoutube: boolean = true;
  isPublie: boolean = false;
  publie: string = "+ Cérémonies écrites et publiées";

  myRessource: Ressource | undefined;
  isPopupVisible = false;

  IMG: string = Configuration.IMG;
  VID: string = Configuration.VID;

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

    this.ressourceService.getRessources('E')
      .subscribe({
        next: ceremonies => { this.ceremonies = ceremonies; },
        error: err => console.log(err)
      })
  }

  toggle(g: string) {
    if (g === "Y") {
      this.isYoutube = !this.isYoutube;
      this.youtube = !this.isYoutube ? "+ Cérémonies depuis Youtube" : "- Cérémonies depuis Youtube";
    } else if (g === "P") {
      this.isPublie = !this.isPublie;
      this.publie = this.isPublie ? "- Cérémonies écrites et publiées" : "+ Cérémonies écrites et publiées";
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

    if (this.ceremonies.length) {
      this.ceremonies = [];
    }
  }
}
