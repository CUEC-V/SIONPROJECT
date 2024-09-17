import { Component } from '@angular/core';

@Component({
  selector: 'app-les-offices',
  standalone: true,
  imports: [],
  templateUrl: './les-offices.component.html',
  styleUrl: './les-offices.component.css'
})
export class LesOfficesComponent {
  config = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };
}
