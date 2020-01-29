import { Component, OnInit } from '@angular/core';

import { siteRoutes } from '../../app-routing.module';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public routes = siteRoutes;
  
  constructor() { }

  ngOnInit() {
  }

}
