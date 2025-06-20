import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tous-droits-reserves',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tous-droits-reserves.component.html',
  styleUrl: './tous-droits-reserves.component.css'
})
export class TousDroitsReservesComponent {
  date: Date = new Date();
}
