import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-admin-general',
  standalone: true,
  imports: [CommonModule, RouterLinkWithHref],
  templateUrl: './admin-general.component.html',
  styleUrl: './admin-general.component.css'
})
export class AdminGeneralComponent {

}
