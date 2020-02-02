import { Component, OnInit } from '@angular/core';
import { references, quoteReferences } from '../../models/Reference';

@Component({
  selector: 'app-references',
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.scss']
})
export class ReferencesComponent implements OnInit {

  public references = references;
  public quoteReferences = quoteReferences;

  constructor() { }

  ngOnInit() {
  }

}
