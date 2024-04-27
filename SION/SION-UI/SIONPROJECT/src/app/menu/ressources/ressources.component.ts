import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-ressources',
  standalone: true,
  imports: [CommonModule, RouterLinkWithHref],
  templateUrl: './ressources.component.html',
  styleUrl: './ressources.component.css',

})

export class RessourcesComponent {
  reseaux: string[] = ["facebook.png", "google.png", "twitter.png", "youtube.png"];
}

