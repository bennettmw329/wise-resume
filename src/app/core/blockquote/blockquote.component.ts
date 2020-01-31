import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-blockquote',
  templateUrl: './blockquote.component.html',
  styleUrls: ['./blockquote.component.scss']
})
export class BlockquoteComponent implements OnInit {

  @Input() reference;
  
  constructor() { }

  ngOnInit() {
  }

}
