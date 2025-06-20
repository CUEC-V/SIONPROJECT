import { Component, OnDestroy, OnInit } from '@angular/core';
import { RessourceService } from '../service/ressource.service';
import { Ressource } from '../models/ressource-model';
import { CommonModule } from '@angular/common';
import { TemoinFilsComponent } from "./temoin-fils/temoin-fils.component";
import { Configuration } from '../../../configuration';
import { Router, RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-gestion',
  standalone: true,
  imports: [CommonModule, TemoinFilsComponent, RouterLinkWithHref],
  templateUrl: './gestion.component.html',
  styleUrl: './gestion.component.css'
})
export class GestionComponent implements OnInit, OnDestroy {

  videos: any[] = [];
  youtubeVideosNumber: number = 1;
  temoignages: Ressource[] = [];

  youtube: string = '- Annonces depuis Youtube';
  isYoutube: boolean = true;
  isPublie: boolean = false;
  publie: string = "+ Annonces écrites et publiées";

  constructor(private ressourceService: RessourceService, private router: Router) { }

  ngOnInit(): void {
    this.ressourceService.getRessources('').subscribe({
      next: ressources => { this.temoignages = ressources; console.log(ressources); },
      error: err => console.log(err)
    });

    this.videos = [];
    this.youtubeVideosNumber = Configuration.Youtube_VIDEOS_NUMBER;

    this.ressourceService
      .getVideosForChanel(Configuration.Youtube_CHANNEL_NAME, this.youtubeVideosNumber)
      .subscribe({
        next: videos => { this.videos = videos["items"] },
        error: err => console.log(err)
      }
      )
  }

  myRessource(r: Ressource) {
    this.ressourceService.valider(r).subscribe({
      next: a => {
        window.confirm('Insertion réussie');
        this.router.navigate(['/administration-general']);
      },
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
