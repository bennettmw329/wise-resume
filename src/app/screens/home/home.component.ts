import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public hobbies : Hobby[] = [
    {
      image: "assets/golf.jpg",
      title: "Golf",
      content: "VISAA State Champion (2017)"
    },
    {
      image: "assets/squash.jpg",
      title: "Squash",
      content: "Div VII HEAD US High School National Champion (2017)"
    },
    {
      image: "assets/sam.jpg",
      title: "Greek Life",
      content: "House Manager, Professional Chair, & Athletic Chair"
    }
  ]

  constructor() { }

  ngOnInit() {
  }
}

interface Hobby {
  image: string,
  title: string,
  content: string
}
