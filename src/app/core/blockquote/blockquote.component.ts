import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-blockquote',
  templateUrl: './blockquote.component.html',
  styleUrls: ['./blockquote.component.scss']
})
export class BlockquoteComponent implements OnInit {

  @Input() quote: string;
  @Input() name: string;
  @Input() position: string;

  constructor() { }

  ngOnInit() {
  }

}
