import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLinkWithHref, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLinkWithHref],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'SIONPROJECT';
}
