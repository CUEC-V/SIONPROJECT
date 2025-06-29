import { Component, OnInit } from '@angular/core';
import { ReseauSocialService } from '../service/reseau-social.service';
import { ActivatedRoute, Router, RouterLinkWithHref } from '@angular/router';
import { ReseauSocialModel } from '../models/reseau-social-model';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-maj',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,RouterLinkWithHref],
  templateUrl: './maj.component.html',
  styleUrl: './maj.component.css'
})
export class MajComponent implements OnInit {

  reseauSocial!: any;
  reseauSocialFormGroup = new FormGroup({
    id: new FormControl(0),
    urlImage: new FormControl('', [Validators.required, Validators.minLength(2)]),
    site: new FormControl('', [Validators.required, Validators.minLength(2)]),
    description: new FormControl('', [Validators.required, Validators.minLength(10)]),
    accueilId: new FormControl(1),
  });

  constructor(private reseauSocialService: ReseauSocialService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    let id = Number(this.route.snapshot.paramMap.get('id'));

    if (isNaN(id)) {
      this.router.navigate(['/reseauxSocial']);
    }

    this.reseauSocialService.getReseauSocialById(id).subscribe({
      next: r => {
        this.reseauSocial = r;
        this.reseauSocialFormGroup.setValue(this.reseauSocial);
      },
      error: err => console.log(err)
    })

  }

  onSubmit() {
    var form = this.reseauSocialFormGroup.value;

    this.reseauSocialService.maj(form)
      .subscribe({
        next: r => {
          this.reseauSocial = r;
          if (!this.reseauSocial) {
            this.router.navigate(['/reseau-social']);
          }
          window.confirm('MAJ réussie ! ');
          this.router.navigate(['/reseau-social']);
        },
        error: err => console.log(err)
      });
  }

  delete(r: ReseauSocialModel) {
    if (window.confirm('Confirmez-vous supprimer ce réseau social ?')) {
      this.reseauSocialService.delete(r.id).subscribe({
        next: l => {
          if (l.length) {
            console.log(l);
            this.router.navigate(['/reseau-social']);
          }
        },
        error: err => console.log(err)
      })
    }
  }
}
