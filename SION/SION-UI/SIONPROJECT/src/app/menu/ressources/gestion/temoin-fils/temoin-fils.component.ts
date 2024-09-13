import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { RessourceService } from '../../service/ressource.service';
import { Ressource } from '../../models/ressource-model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'temoignage-fils',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './temoin-fils.component.html',
  styleUrl: './temoin-fils.component.css'
})
export class TemoinFilsComponent implements OnInit, OnDestroy {
  @Input() ressource: Ressource | undefined | null;

  constructor(private ressourceService: RessourceService) { }

  ngOnInit(): void {
   
  }

  ngOnDestroy(): void {
    
  }

}
