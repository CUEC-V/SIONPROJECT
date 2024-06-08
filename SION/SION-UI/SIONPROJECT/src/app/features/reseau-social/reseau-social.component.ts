import { Component, OnDestroy, OnInit } from '@angular/core';
import { ReseauSocialService } from './service/reseau-social.service';
import { ReseauSocialModel } from './models/reseau-social-model';
import { CommonModule } from '@angular/common';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-reseau-social',
  standalone: true,
  imports: [CommonModule, RouterLinkWithHref],
  templateUrl: './reseau-social.component.html',
  styleUrl: './reseau-social.component.css'
})
export class ReseauSocialComponent implements OnInit, OnDestroy {

  constructor(private reseauSocialService: ReseauSocialService) { }

  resaux!: ReseauSocialModel[];

  ngOnInit(): void {
    this.reseauSocialService.getReseauxSociaux().subscribe({
      next: resaux => {
        this.resaux = resaux;
        console.log(this.resaux);
      },
      error: err => console.log(err)
    })
  }

  ngOnDestroy(): void {

  }
}
