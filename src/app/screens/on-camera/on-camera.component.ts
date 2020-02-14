import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { otcVideos } from '../../models/Video';
import { GoogleSheetService } from 'src/app/services/google-sheet.service';

@Component({
  selector: 'app-on-camera',
  templateUrl: './on-camera.component.html',
  styleUrls: ['./on-camera.component.scss']
})
export class OnCameraComponent implements OnInit {

  private subscription : Subscription = new Subscription();
  public videos = otcVideos;

  constructor(private googleSheet : GoogleSheetService) { }

  ngOnInit() {
    this.subscription.add(this.googleSheet.getOnCamera().subscribe((data) => {

    }));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
