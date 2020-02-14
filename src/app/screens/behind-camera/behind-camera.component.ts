import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { btcVideos } from '../../models/Video';
import { GoogleSheetService } from 'src/app/services/google-sheet.service';

@Component({
  selector: 'app-behind-camera',
  templateUrl: './behind-camera.component.html',
  styleUrls: ['./behind-camera.component.scss']
})
export class BehindCameraComponent implements OnInit {

  private subscription : Subscription = new Subscription();
  public videos = btcVideos;

  constructor(private googleSheet : GoogleSheetService) { }

  ngOnInit() {
    this.subscription.add(this.googleSheet.getBehindCamera().subscribe((data) => {

    }));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}