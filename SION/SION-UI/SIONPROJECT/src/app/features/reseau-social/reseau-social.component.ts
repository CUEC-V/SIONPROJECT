import { Component, OnDestroy, OnInit } from '@angular/core';
import { ReseauSocialService } from './service/reseau-social.service';
import { ReseauSocialModel } from './models/reseau-social-model';
import { CommonModule } from '@angular/common';
import { Router, RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-reseau-social',
  standalone: true,
  imports: [CommonModule, RouterLinkWithHref],
  templateUrl: './reseau-social.component.html',
  styleUrl: './reseau-social.component.css'
})
export class ReseauSocialComponent implements OnInit, OnDestroy {

  constructor(private reseauSocialService: ReseauSocialService, private router: Router) { }

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

  delete(r: ReseauSocialModel) {
    if (window.confirm('Confirmez-vous supprimer ce réseau social ?')) {
      this.reseauSocialService.delete(r.id).subscribe({
        next: l => {
          console.log('====================================>');
          if (l.length) {
            console.log(l);
            this.router.navigate(['/reseau-social']);
          }
        },
        error: err => console.log(err)
      })
    }
  }

  ngOnDestroy(): void {

  }
}
