import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-annonces-detail',
  standalone: true,
  imports: [CommonModule, RouterLinkWithHref],
  templateUrl: './annonces-detail.component.html',
  styleUrl: './annonces-detail.component.css'
})
export class AnnoncesDetailComponent {

}
