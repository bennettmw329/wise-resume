import { Component, OnInit } from '@angular/core';
import { Observable, Subscribable, Subscription } from 'rxjs';

import { references, quoteReferences } from '../../models/Reference';
import { GoogleSheetService } from 'src/app/services/google-sheet.service';


@Component({
  selector: 'app-references',
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.scss']
})
export class ReferencesComponent implements OnInit {

  private subscription : Subscription = new Subscription();

  public references = references;
  public quoteReferences = quoteReferences;

  constructor(private googleSheet : GoogleSheetService) { }

  ngOnInit() {
    this.subscription.add(this.googleSheet.getReferences()
      .subscribe((data) => {

      }
    ));

    this.subscription.add(this.googleSheet.getTestimonials()
      .subscribe((data) => {

      }
    ));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
