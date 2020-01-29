import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { MzMediaService } from 'ngx-materialize';
import { siteRoutes } from '../../app-routing.module';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  public smallResolution: boolean;
  public routes = siteRoutes;

  constructor(private mediaService: MzMediaService) { }

  ngOnInit() {
    this.mediaService.media.subscribe((data) => {
      if(data.alias == 's' || data.alias == 'm') {
        this.smallResolution = true;
      } else {
        this.smallResolution = false;
      }
    });
  }

}
