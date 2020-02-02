import { Component, OnInit } from '@angular/core';

import { stories } from '../../models/Story';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss']
})
export class StoriesComponent implements OnInit {

  public stories = stories;

  constructor() { }

  ngOnInit() {
  }

}
