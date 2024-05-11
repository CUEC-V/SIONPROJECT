import { Component, OnInit } from '@angular/core';
import { FooterService } from '../core/footer.service';
import { Accueil } from '../accueil/models/accueil';
import { CommonModule } from '@angular/common';
import { Configuration } from '../configuration';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit{
  accueil: Accueil | undefined;
  accueils: Accueil[] | undefined;
  date!:Date;
  pat_date_creation:string = Configuration.PAT_DATE_CREATION;
  
  constructor(private footerService: FooterService) { }

  ngOnInit(): void {
    this.footerService.getAccueil().subscribe({
      next: a => {
        this.accueils = a;
        this.accueil = this.accueils.length > 0 ? this.accueils[0] : this.accueil;
      },
      error: err => console.log(err)
    })
    this.date = new Date();
  }
}
