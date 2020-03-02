import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GoogleSheetService } from 'src/app/services/google-sheet.service';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss']
})
export class StoriesComponent implements OnInit {

  private subscription : Subscription = new Subscription();
  public stories = [];

  constructor(private googleSheet : GoogleSheetService) { }

  ngOnInit() {
    this.subscription.add(
      this.googleSheet.getStories().subscribe((data) => {
        data.values.forEach((elem) => {
          let story = {
            title: elem[0],
            description: elem[1],
            link: elem[2],
            published: elem[3],
            picture: elem[4]
          }
          this.stories.push(story);
        });
    }));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
