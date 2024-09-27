import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AccueilService } from './service/accueil.service';
import { Accueil } from './models/accueil';
import { Unsubscribable } from 'rxjs';
import { Configuration } from '../configuration';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'accueil',
  standalone: true,
  imports: [CommonModule, RouterLinkWithHref],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.css'
})
export class AccueilComponent implements OnInit, Unsubscribable {
  reseaux: string[] = ["facebook.png", "google.png", "twitter.png"];
  accueil: Accueil | undefined;
  accueils: Accueil[] | undefined;
  videoPasteur: any;
  videoId: string = '';

  constructor(private accueilService: AccueilService) { }

  ngOnInit(): void {
    this.accueilService.getAccueil().subscribe({
      next: a => {
        this.accueils = a;
        this.accueil = this.accueils.length > 0 ? this.accueils[0] : this.accueil;
        this.videoId = this.accueil?.accueil ? this.accueil.accueil.video : Configuration.Youtube_VIDEO_PASTEUR;
        console.log(this.videoId + 'to from');

        this.accueilService.getVideoByVideoIdForChanel(Configuration.Youtube_CHANNEL_NAME, this.videoId)
          .subscribe({
            next: v => {
              let items = v["items"];
              this.videoPasteur = items.length ? items[0] : this.videoPasteur;
              console.log(this.videoPasteur);
            }
          })
      },
      error: err => console.log(err)
    })
  }

  unsubscribe(): void {

  }
}
