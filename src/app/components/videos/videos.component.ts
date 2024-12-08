import { Component } from '@angular/core';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrl: './videos.component.css'
})
export class VideosComponent {
  video = [
    {
      url: 'videos/video1.mp4',
      titulo: 'Video 1 - Introducción'
    },
    {
      url: 'img/video2.mp4',
      titulo: 'Video 2 - Tutorial'
    },
    {
      url: 'video/video3.mp4',
      titulo: 'Video 3 - Demostración'
    }
  ];

}
