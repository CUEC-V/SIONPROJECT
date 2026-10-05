import { Component, OnInit } from '@angular/core';
import { AccueilService } from '../../../accueil/service/accueil.service';
import { Accueil } from '../../../accueil/models/accueil';

@Component({
  selector: 'app-biographie-du-pasteur',
  standalone: true,
  imports: [],
  templateUrl: './biographie-du-pasteur.component.html',
  styleUrl: './biographie-du-pasteur.component.css'
})
export class BiographieDuPasteurComponent implements OnInit {
  accueil: Accueil | undefined;
  accueils: Accueil[] | undefined;
  
  ngOnInit(): void {
    this.accueilService.getAccueil().subscribe({
      next: a => {
        this.accueils = a;
        this.accueil = this.accueils.length > 0 ? this.accueils[0] : this.accueil;
      },
      error: err => console.log(err)
    })
  }
constructor(private accueilService: AccueilService){}

}
