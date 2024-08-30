import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ContactModel } from '../models/contacter-model';
import { Router } from '@angular/router';
import { ContactService } from '../service/contact.service';
import { ReseauSocial } from '../../../accueil/models/reseau-social';
import { ReseauSocialService } from '../../../features/reseau-social/service/reseau-social.service';
import { ReseauSocialModel } from '../../../features/reseau-social/models/reseau-social-model';

@Component({
  selector: 'app-nous-contacter',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './nous-contacter.component.html',
  styleUrl: './nous-contacter.component.css'
})
export class NousContacterComponent implements OnInit, OnDestroy {
  rows: number = 5;
  reseaux: ReseauSocialModel[] = [];

  contactFormGroup = new FormGroup({
    id: new FormControl(0),
    nomEtprenoms: new FormControl('', [Validators.required, Validators.minLength(3)]),
    courriel: new FormControl('', [Validators.required, Validators.email]),
    sujetCourriel: new FormControl('', [Validators.required, Validators.minLength(3)]),
    telephone: new FormControl('', Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")),
    message: new FormControl('', [Validators.required, Validators.minLength(3)]),
  })

  constructor(private router: Router, private contactService: ContactService, private reseauSocialService: ReseauSocialService) { }

  ngOnInit(): void {
    this.reseauSocialService.getReseauxSociaux().subscribe({
      next: reseaux => this.reseaux = reseaux,
      error: err => {
        console.log("Appel des réseaux sociaux dans le composant Nous contacter");
        console.log(err);
      }
    })
  }

  onSubmit() {
    const contact = this.contactFormGroup.value as ContactModel;

    if (Number(contact.id) === 0) {
      this.contactService.envoyer(contact).subscribe({
        next: a => {
       var opt =   window.confirm("Votre message a été envoyé avec succès");
       console.log('Base de : '+opt);
       if(opt===true)
          this.router.navigate(['/']);
        },
        error: err => console.log(err)
      })

    }
  }

  ngOnDestroy(): void {
    if (this.reseaux) {
      this.reseaux = [];
    }
  }
}
