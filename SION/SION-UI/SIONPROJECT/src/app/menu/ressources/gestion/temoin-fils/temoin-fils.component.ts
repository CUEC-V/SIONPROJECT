import { Component, EventEmitter, Input, OnDestroy, OnInit, Output, TemplateRef } from '@angular/core';
import { RessourceService } from '../../service/ressource.service';
import { Ressource } from '../../models/ressource-model';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CorepComponent } from "../../../../popup/core/core-p.component";
import { Configuration } from '../../../../configuration';

@Component({
  selector: 'temoignage-fils',
  standalone: true,
  imports: [CommonModule, CorepComponent],
  templateUrl: './temoin-fils.component.html',
  styleUrl: './temoin-fils.component.css'
})
export class TemoinFilsComponent implements OnInit, OnDestroy {

  @Input() ressource: Ressource | undefined | null;
  @Output() ressourceEditor: EventEmitter<Ressource> = new EventEmitter<Ressource>();

  myRessource: Ressource | undefined;
  isPopupVisible = false;

  VID: string = Configuration.VID;
  IMG: string = Configuration.IMG;

  constructor(private ressourceService: RessourceService, private router: Router) { }

  ngOnInit(): void {
    console.log(this.ressource);
  }

  valider(ressort: Ressource) {
    this.ressourceEditor.emit(ressort);
  }

  showPopup(rsc: Ressource) {
    this.isPopupVisible = true;
    if (rsc) {
      this.myRessource = rsc;
    }
  }

  hidePopup() {
    this.isPopupVisible = false;
  }

  modifier(ressourceKey: number) {
    if (!ressourceKey) {
      return;
    }

    return this.router.navigate([`/ressources/${ressourceKey}/edition/ajouter-fichier`, ressourceKey]);
  }

  openModal(viewUserTemplate: TemplateRef<any>, rsc: Ressource) {
    if (rsc) {
      this.myRessource = rsc;
      //  this.modalRef = this.modalService.show(viewUserTemplate);
    }
  }
  exitModal = (): void => {
    // this.modalRef?.hide();
  };

  ngOnDestroy(): void {

  }

}
