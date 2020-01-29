import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-extra-activities',
  templateUrl: './extra-activities.component.html',
  styleUrls: ['./extra-activities.component.scss']
})
export class ExtraActivitiesComponent implements OnInit {

  public hobbies : Hobby[] = [
    {
      image: "assets/sam.jpg",
      title: "Greek Life",
      content: [
        "House Manager",
        "Professional Chair",
        "Athletic Chair"
      ]
    },
    {
      image: "assets/golf.jpg",
      title: "Golf",
      content: [
        "Virginia Independent Schools Athletic Association (VISAA) State Champion (2017)",
        "VISAA First Team All-State (2016)"
      ]
    },
    {
      image: "assets/squash.jpg",
      title: "Squash",
      content: [
        "Division VII HEAD US High School National Champion (2017)"
      ]
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}

interface Hobby {
  image: string,
  title: string,
  content: string[]
}

