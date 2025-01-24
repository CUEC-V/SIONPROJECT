import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLinkWithHref, RouterOutlet } from '@angular/router';
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [CommonModule, RouterOutlet, RouterLinkWithHref, FooterComponent]
})
export class AppComponent implements OnInit {
  isAuthenticated: boolean | null = null;
  ngOnInit(): void {
    let item = localStorage?.getItem('MANAGE') ?? 'false';
    this.isAuthenticated = Boolean(item);
  }
  title = 'SIONPROJECT';
}
