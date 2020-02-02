import { Component, OnInit } from '@angular/core';

import { btcVideos } from '../../models/Video';

@Component({
  selector: 'app-behind-camera',
  templateUrl: './behind-camera.component.html',
  styleUrls: ['./behind-camera.component.scss']
})
export class BehindCameraComponent implements OnInit {

  public videos = btcVideos;

  constructor() { }

  ngOnInit() {
  }

}