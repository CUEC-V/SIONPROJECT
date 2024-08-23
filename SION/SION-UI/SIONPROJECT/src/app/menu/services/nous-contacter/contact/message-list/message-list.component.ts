import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../../service/contact.service';
import { ContactModel } from '../../../models/contacter-model';
import { CommonModule } from '@angular/common';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-message-list',
  standalone: true,
  imports: [CommonModule, RouterLinkWithHref],
  templateUrl: './message-list.component.html',
  styleUrl: './message-list.component.css'
})
export class MessageListComponent implements OnInit {
  messages: ContactModel[] = [];

  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
    this.contactService.getMessages().subscribe({
      next: messages => this.messages = messages,
      error: err => console.log(err)
    })
  }

}
