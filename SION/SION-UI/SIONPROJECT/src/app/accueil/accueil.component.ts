import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AccueilService } from './service/accueil.service';
import { Accueil } from './models/accueil';
import { Unsubscribable } from 'rxjs';

@Component({
  selector: 'accueil',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.css'
})
export class AccueilComponent implements OnInit, Unsubscribable {
  reseaux: string[] = ["facebook.png", "google.png", "twitter.png"];
  accueil: Accueil | undefined;
  accueils : Accueil[] | undefined;

  constructor(private accueilService: AccueilService) { }

  ngOnInit(): void {
    this.accueilService.getAccueil().subscribe({
      next: a => {
        this.accueils = a;
        this.accueil = this.accueils.length > 0 ? this.accueils[0] : this.accueil;
      },
      error: err => console.log(err)
    })
  }

  unsubscribe(): void {
   
  }
}
