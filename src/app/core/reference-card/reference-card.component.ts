import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-reference-card',
  templateUrl: './reference-card.component.html',
  styleUrls: ['./reference-card.component.scss']
})
export class ReferenceCardComponent implements OnInit {

  @Input() reference;

  constructor() { }

  ngOnInit() {
  }

}
