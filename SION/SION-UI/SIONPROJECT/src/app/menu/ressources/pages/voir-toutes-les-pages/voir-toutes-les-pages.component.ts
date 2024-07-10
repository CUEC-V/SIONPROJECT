import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-voir-toutes-les-pages',
  standalone: true,
  imports: [CommonModule, RouterLinkWithHref],
  templateUrl: './voir-toutes-les-pages.component.html',
  styleUrl: './voir-toutes-les-pages.component.css'
})
export class VoirToutesLesPagesComponent {

}
