import { Component, OnDestroy, OnInit } from '@angular/core';
import { PredicationServiceService } from './service/predication-service.service';
import { Configuration } from '../../configuration';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-predications',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './predications.component.html',
  styleUrl: './predications.component.css'
})
export class PredicationsComponent implements OnInit, OnDestroy {

  videos: any[] = [];
  youtubeVideosNumber: number = 1;
  constructor(private predicationService: PredicationServiceService) { }

  ngOnInit(): void {
    this.videos = [];
    this.youtubeVideosNumber = Configuration.Youtube_VIDEOS_NUMBER;

    this.predicationService
      .getVideosForChanel(Configuration.Youtube_CHANNEL_NAME, this.youtubeVideosNumber)
      .subscribe({
        next: videos => { this.videos = videos["items"]; console.log(this.videos) },
        error: err => console.log(err)
      }
      )
  }

  afficherplus(n: number) {
    this.youtubeVideosNumber += Configuration.Youtube_VIDEOS_NUMBER;
    console.log(this.youtubeVideosNumber);
    this.predicationService
      .getVideosForChanel(Configuration.Youtube_CHANNEL_NAME, this.youtubeVideosNumber)
      .subscribe({
        next: videos => { this.videos = videos["items"]; console.log(this.videos) },
        error: err => console.log(err)
      })
  }

  ngOnDestroy(): void {
    if (this.videos.length) {
      this.videos = [];
    }
  }
}

