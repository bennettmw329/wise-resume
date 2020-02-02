import { Component, OnInit } from '@angular/core';

import { otcVideos } from '../../models/Video';

@Component({
  selector: 'app-on-camera',
  templateUrl: './on-camera.component.html',
  styleUrls: ['./on-camera.component.scss']
})
export class OnCameraComponent implements OnInit {

  public videos = otcVideos;

  constructor() { }

  ngOnInit() {
  }

}
