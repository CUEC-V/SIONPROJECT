import { Component, OnInit } from '@angular/core';
import { ContactModel } from '../../../models/contacter-model';
import { ContactService } from '../../../service/contact.service';
import { ActivatedRoute, Router, RouterLinkWithHref } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-message-detail',
  standalone: true,
  imports: [CommonModule, RouterLinkWithHref],
  templateUrl: './message-detail.component.html',
  styleUrl: './message-detail.component.css'
})
export class MessageDetailComponent implements OnInit {
  message!: ContactModel
  rows: number = 5;
  raisonSocial : string ='';

  constructor(private contactService: ContactService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    let id = Number(this.route.snapshot.paramMap.get('id'));

    if (isNaN(id)) {
      this.router.navigate(['/message-recus']);
    }

    this.contactService.getMessageById(id).subscribe({
      next: msg => {
        this.message = msg;
        this.raisonSocial = `${msg.nomEtprenoms}[${msg.courriel}]`;
      },
      error: err => {
        console.log("Appel du service Contact dans message détail");
        console.log(err);
      }
    })
  }
}
