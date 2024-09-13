import { Component, OnDestroy, OnInit } from '@angular/core';
import { RessourceService } from '../service/ressource.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Ressource } from '../models/ressource-model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajouter-ressource',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './ajouter-ressource.component.html',
  styleUrl: './ajouter-ressource.component.css'
})
export class AjouterRessourceComponent implements OnInit, OnDestroy {
  rows: number = 5;
  items: any[] = [{ key: 'A', value: 'Annonce' }, { key: 'T', value: 'Témoignage' }, { key: 'E', value: 'Evénement & cérémonie' }, { key: 'C', value: 'Cantiques & chants' }];

  ressourceFormGroup = new FormGroup({
    id: new FormControl(0),
    titre: new FormControl('', [Validators.required, Validators.minLength(3)]),
    sousTitre: new FormControl('', [Validators.required, Validators.minLength(3)]),
    auteur: new FormControl('', [Validators.required, Validators.minLength(3)]),
    url: new FormControl(''),
    description: new FormControl('', [Validators.required, Validators.minLength(3)]),
    creation: new FormControl(new Date()),
    dateModification: new FormControl(new Date()),
    typeRessource: new FormControl('', [Validators.required]),
  })



  constructor(private ressourceService: RessourceService, private router: Router) { }


  ngOnInit(): void {
    this.items.sort(x => x.value);
  }

  onSubmit() {
    console.log(JSON.stringify(this.ressourceFormGroup.value));
    console.log(this.ressourceFormGroup.valid);
    if(!this.ressourceFormGroup.valid) return;

    const ressource = this.ressourceFormGroup.value as Ressource;
console.log('===========================================>');
    if (Number(ressource.id) === 0) {
      this.ressourceService.publier(ressource).subscribe({
        next: a => {
          var opt = window.confirm("Votre annonce a été publiée avec succès");
          console.log('Base de : ' + opt);
          if (opt === true)
            this.router.navigate(['/']);
        },
        error: err => console.log(err)
      })

    }
  }

  ngOnDestroy(): void {

  }
}
