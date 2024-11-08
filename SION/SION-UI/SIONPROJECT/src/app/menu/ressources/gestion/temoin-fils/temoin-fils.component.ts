import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { RessourceService } from '../../service/ressource.service';
import { Ressource } from '../../models/ressource-model';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'temoignage-fils',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './temoin-fils.component.html',
  styleUrl: './temoin-fils.component.css'
})
export class TemoinFilsComponent implements OnInit, OnDestroy {

  @Input() ressource: Ressource | undefined | null;
  @Output() ressourceEditor: EventEmitter<Ressource> = new EventEmitter<Ressource>();

  constructor(private ressourceService: RessourceService, private router: Router) { }

  ngOnInit(): void {
    console.log(this.ressource);
  }

  valider(ressort: Ressource) {
    this.ressourceEditor.emit(ressort);
  }

  modifier(ressourceKey: number) {
    if (!ressourceKey) {
      return;
    }

    return this.router.navigate([`/ressources/${ressourceKey}/edition/ajouter-fichier`, ressourceKey]);
  }

  ngOnDestroy(): void {

  }

}
