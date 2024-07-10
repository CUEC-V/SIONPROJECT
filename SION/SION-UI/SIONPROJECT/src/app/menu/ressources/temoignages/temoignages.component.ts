import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-temoignages',
  standalone: true,
  imports: [CommonModule, RouterLinkWithHref],
  templateUrl: './temoignages.component.html',
  styleUrl: './temoignages.component.css'
})
export class TemoignagesComponent {

}
