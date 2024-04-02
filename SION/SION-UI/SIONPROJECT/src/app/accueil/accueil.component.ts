import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'accueil',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.css'
})
export class AccueilComponent {
  reseaux: string[] = ["facebook.png", "google.png", "twitter.png"];
}
