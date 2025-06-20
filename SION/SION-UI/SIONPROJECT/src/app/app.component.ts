import { afterNextRender, Component, OnInit } from '@angular/core';
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
  isAuthenticated: boolean  = false;
  constructor() {
    afterNextRender(() => {

      const storedData = localStorage.getItem('MANAGE');
      if (storedData) {
        try {
          this.isAuthenticated = JSON.parse(storedData);
          console.log(this.isAuthenticated+' dans app');
        }
        catch (err) {
        }
      } else {
        this.isAuthenticated = false;
        console.log(this.isAuthenticated+' dans app');
      }
    });
  }
  ngOnInit(): void {

  }
  title = 'SIONPROJECT';
}
