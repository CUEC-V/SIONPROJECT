import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Ressource } from '../../menu/ressources/models/ressource-model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-core-popup',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './core-p.component.html',
  styleUrl: './core-p.component.css'
})
export class CorepComponent {
  @Output() close = new EventEmitter<void>();
  @Input() ressource: Ressource | undefined | null;

  closePopup() {
    this.close.emit();
  }

  // https://zerotomastery.io/blog/angular-modal/
}
