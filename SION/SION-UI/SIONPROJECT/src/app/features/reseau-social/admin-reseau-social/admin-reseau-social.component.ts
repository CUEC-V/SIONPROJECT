import { Component } from '@angular/core';
import { ReseauSocialService } from '../service/reseau-social.service';
import { ReseauSocialModel } from '../models/reseau-social-model';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-reseau-social',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './admin-reseau-social.component.html',
  styleUrl: './admin-reseau-social.component.css'
})
export class AdminReseauSocialComponent {
  reseauSocialFormGroup = new FormGroup({
    id : new FormControl(0),
    urlImage: new FormControl('', [Validators.required, Validators.minLength(2)]),
    site: new FormControl('', [Validators.required, Validators.minLength(4)]),
    description: new FormControl('', [Validators.required, Validators.minLength(10)]),
    accueilId: new FormControl(1),
  });

  constructor(private reseauSociauxService: ReseauSocialService, private router : Router ) { }

  onSubmit() {
    const rs = this.reseauSocialFormGroup.value as unknown as ReseauSocialModel;

    this.reseauSociauxService.creer(rs).subscribe({
      next: a => {
        window.confirm('Insertion réussie');
        this.router.navigate(['/']);
      },
      error: err => console.log(err)
    })
  }
}
