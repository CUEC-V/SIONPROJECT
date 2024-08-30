import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-cantiques-chants',
  standalone: true,
  imports: [CommonModule, RouterLinkWithHref],
  templateUrl: './cantiques-chants.component.html',
  styleUrl: './cantiques-chants.component.css'
})
export class CantiquesChantsComponent {

}
