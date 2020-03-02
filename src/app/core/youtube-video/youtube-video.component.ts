import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-youtube-video',
  templateUrl: './youtube-video.component.html',
  styleUrls: ['./youtube-video.component.scss']
})
export class YoutubeVideoComponent implements OnInit {

  @Input() video;
  public youtubeBaseUrl = 'https://www.youtube.com/embed/';

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.sanitizeURL();
  }

  sanitizeURL() {
    this.video.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.youtubeBaseUrl + this.video.youtubeVideoId);
  }

}
