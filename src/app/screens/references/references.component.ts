import { Component, OnInit } from '@angular/core';
import { Observable, Subscribable, Subscription } from 'rxjs';

import { GoogleSheetService } from 'src/app/services/google-sheet.service';


@Component({
  selector: 'app-references',
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.scss']
})
export class ReferencesComponent implements OnInit {

  private subscription : Subscription = new Subscription();

  public references = [];
  public quoteReferences = [];

  constructor(private googleSheet : GoogleSheetService) { }

  ngOnInit() {
    this.subscription.add(
      this.googleSheet.getTestimonials().subscribe((data) => {
        data.values.forEach((elem) => {
          let quote = {
            name: elem[0],
            quote: elem[1]
          }
          this.quoteReferences.push(quote);
        });
    }));

    this.subscription.add(
      this.googleSheet.getReferences().subscribe((data) => {
        data.values.forEach((elem) => {
          let position = elem[1].split('~');
          let reference = {
            name: elem[0],
            position: position,
            image: elem[2],
            imagesource: elem[3],
            phone: elem[4],
            email: elem[5],
            twitter: elem[6] 
          }
          this.references.push(reference);
        });
    }));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
