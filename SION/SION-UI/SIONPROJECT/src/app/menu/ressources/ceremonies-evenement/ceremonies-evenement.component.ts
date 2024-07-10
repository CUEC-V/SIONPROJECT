import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-ceremonies-evenement',
  standalone: true,
  imports: [CommonModule, RouterLinkWithHref],
  templateUrl: './ceremonies-evenement.component.html',
  styleUrl: './ceremonies-evenement.component.css'
})
export class CeremoniesEvenementComponent {

}
