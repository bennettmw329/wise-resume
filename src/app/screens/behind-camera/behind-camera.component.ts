import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { GoogleSheetService } from 'src/app/services/google-sheet.service';

@Component({
  selector: 'app-behind-camera',
  templateUrl: './behind-camera.component.html',
  styleUrls: ['./behind-camera.component.scss']
})
export class BehindCameraComponent implements OnInit {

  private subscription : Subscription = new Subscription();
  public videos = [];

  constructor(private googleSheet : GoogleSheetService) { }

  ngOnInit() {
    this.subscription.add(
      this.googleSheet.getBehindCamera().subscribe((data) => {
        data.values.forEach((elem) => {
          let video = {
            title: elem[0],
            description: elem[1],
            youtubeVideoId: elem[2],
            onCamera: elem[3]
          }
          console.log(video);
          if (video.onCamera != '1' && video.title != '' && video.description != '' && video.youtubeVideoId != '' && video.onCamera != '') {
            this.videos.push(video);
          }
        });
    }));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}