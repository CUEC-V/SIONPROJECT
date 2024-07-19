import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Message } from '../../message';
import { AccueilModel } from '../models/accueil-model';
import { AccueilService } from '../service/accueil.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent implements OnInit {
  isIinformation: boolean = false;
  isImageAigle: boolean = false;
  isAdresse: boolean = false;
  isHorairesOuverture: boolean = false;
  isVideoPAT: boolean = false;

  information: string = '+ Informations générales';
  imageAigle: string = '+ Image de l\'aigle';
  adresse: string = '+ Adresse';
  horairesOuverture: string = '+ Horaires d\'ouverture';
  videoPAT: string = '+ Vidéo de la Pierre Angulaire Tabernacle';

  accueil!: AccueilModel;


  accueilFormGroup = new FormGroup({
    id: new FormControl(0),
    nomEglise: new FormControl('', [Validators.required, Validators.minLength(3)]),
    texteIntroductif: new FormControl('', [Validators.required, Validators.minLength(3)]),
    imageAngeDuSeigneur: new FormControl(''),
    imageNueeSunSet: new FormControl(''),
    imageOffmann: new FormControl(''),
    texteApocalypseDixSept: new FormControl('', [Validators.required, Validators.minLength(3)]),
    texteBienvenu: new FormControl('', [Validators.required, Validators.minLength(3)]),
    imagePasteur: new FormControl(''),
    imageChandelier: new FormControl(''),
    texteHaut: new FormControl('', [Validators.required, Validators.minLength(3)]),
    video: new FormControl(''),
    textBas: new FormControl('', [Validators.required, Validators.minLength(3)]),
    image: new FormControl(''),
    texteProphete: new FormControl('', [Validators.required, Validators.minLength(3)]),
    numeroLibelleAdresse: new FormControl('', [Validators.required, Validators.minLength(3)]),
    codePostaleVillePays: new FormControl('', [Validators.required, Validators.minLength(3)]),
    numeroTelephone: new FormControl('', [Validators.required, Validators.minLength(3)]),
    premierJourCulte: new FormControl('', [Validators.required, Validators.minLength(3)]),
    deuxiemeJourCulte: new FormControl('', [Validators.required, Validators.minLength(3)]),
    troisiemeJourCulte: new FormControl('', [Validators.required, Validators.minLength(3)]),
    autreJoureCulte: new FormControl('', [Validators.required, Validators.minLength(3)]),
  })

  nomEgliseMessage: string = Message.NomEglise;
  texteIntroductifMessage: string = Message.TexteIntroductif;
  imageAngeDuSeigneur: string = Message.ImageAngeDuSeigneur;
  imageNueeSunSet: string = Message.ImageNueeSunSet;
  imageOffmann: string = Message.ImageOffmann;
  texteApocalypseDixSept: string = Message.TexteApocalypseDixSept;
  texteBienvenu: string = Message.TexteBienvenu;
  imagePasteur: string = Message.ImagePasteur;
  imageChandelier: string = Message.ImageChandelier;
  texteHaut: string = Message.TexteHaut;
  video: string = Message.Video;
  textBas: string = Message.TextBas;
  image: string = Message.Image;
  texteProphete: string = Message.TexteProphete;
  numeroLibelleAdresse: string = Message.NumeroLibelleAdresse;
  codePostaleVillePays: string = Message.CodePostaleVillePays;
  numeroTelephone: string = Message.NumeroTelephone;
  premierJourCulte: string = Message.PremierJourCulte;
  deuxiemeJourCulte: string = Message.DeuxiemeJourCulte;
  troisiemeJourCulte: string = Message.TroisiemeJourCulte;
  autreJoureCulte: string = Message.AutreJoureCulte;


  constructor(private accueilService: AccueilService, private router: Router) { }
  ngOnInit(): void {
    this.accueilService.getAccueil()
      .subscribe({
        next: a => {
          if (a.length > 0) {
            this.accueil = a[0].accueil
            this.setValues(this.accueil);
          }
        }
      });
  }

  toggle(g: string) {
    if (g === "I") {
      this.isIinformation = !this.isIinformation;
      this.information = !this.isIinformation ? "+ Informations générales" : "- Informations générales";
    } else if (g === "IA") {
      this; this.isImageAigle = !this.isImageAigle;
      this.imageAigle = !this.isImageAigle ? `+ ${this.imageAigle.substring(1)} ` : `- ${this.imageAigle.substring(1)} `;
    } else if (g === "A") {
      this; this.isAdresse = !this.isAdresse;
      this.adresse = !this.isAdresse ? `+ ${this.adresse.substring(1)} ` : `- ${this.adresse.substring(1)} `;
    } else if (g === "HO") {
      this; this.isHorairesOuverture = !this.isHorairesOuverture;
      this.horairesOuverture = !this.isHorairesOuverture ? `+ ${this.horairesOuverture.substring(1)} ` : `- ${this.horairesOuverture.substring(1)} `;
    } else if (g === "VI") {
      this; this.isVideoPAT = !this.isVideoPAT;
      this.videoPAT = !this.isVideoPAT ? `+ ${this.videoPAT.substring(1)} ` : `- ${this.videoPAT.substring(1)} `;
    }
  }

  setValues(acc: AccueilModel) {
    if (this.accueil) {
      let thisAccueil = {
        id: this.accueil.id,
        nomEglise: this.accueil.nomEglise,
        texteIntroductif: this.accueil.texteIntroductif,
        imageAngeDuSeigneur: this.accueil.imageAngeDuSeigneur,
        imageNueeSunSet: this.accueil.imageNueeSunSet,
        imageOffmann: this.accueil.imageOffmann,
        texteApocalypseDixSept: this.accueil.texteApocalypseDixSept,
        texteBienvenu: this.accueil.texteBienvenu,
        imagePasteur: this.accueil.imagePasteur,
        imageChandelier: this.accueil.imageChandelier,
        texteHaut: this.accueil.texteHaut,
        video: this.accueil.video,
        textBas: this.accueil.textBas,
        image: this.accueil.image,
        texteProphete: this.accueil.texteProphete,
        numeroLibelleAdresse: this.accueil.numeroLibelleAdresse,
        codePostaleVillePays: this.accueil.codePostaleVillePays,
        numeroTelephone: this.accueil.numeroTelephone,
        premierJourCulte: this.accueil.premierJourCulte,
        deuxiemeJourCulte: this.accueil.deuxiemeJourCulte,
        troisiemeJourCulte: this.accueil.troisiemeJourCulte,
        autreJoureCulte: this.accueil.autreJoureCulte,
      };

      this.accueilFormGroup.setValue(thisAccueil);
    }
  }

  onSubmit() {
    const acc = this.accueilFormGroup.value as AccueilModel;
    if (isNaN(acc.id)) {
      return;
    }
    if (Number(acc.id) === 0) {
      this.accueilService.creer(acc).subscribe({
        next: a => {
          console.log('Insertion réussie')
          this.router.navigate(['/']);
        },
        error: err => console.log(err)
      })

    } else {
      // Update data here !
      this.accueilService.modifier(acc.id,acc).subscribe({
        next: a => {
          console.log('Insertion réussie')
          this.router.navigate(['/']);
        },
        error: err => console.log(err)
      })
    }
  }

}
