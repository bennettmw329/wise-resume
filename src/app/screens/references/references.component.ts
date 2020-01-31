import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-references',
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.scss']
})
export class ReferencesComponent implements OnInit {

  public quoteReferences: Reference[] = [
    {
      name: 'Peter Moses',
      quote: 'Bennett is a triple threat as a broadcast journalist; he understands his subject matter, delivers it with panache and ease and looks and sounds good doing so. He works tirelessly preparing for each broadcast and therefore never gets tripped up regardless of what is taking place before our eyes.',
      position: 'Former Crime and Politics Reporter for the New York Post and Investigative and Political Producer at WWOR-TV. Founder of Moses Communications.',
      image: 'assets/peter-moses.png',
      phone: '(914) 815-5650',
      email: 'peter.moses2007@gmail.com'
    },
    {
      name: 'Andrew Gerber',
      quote: 'Bennett is an extremely hard worker and always has a positive attitude. He enjoys taking on new roles and learns quickly how to become very talented in a variety of positions. Bennett has grown into a leader for us, I’ve not had any student come through who is as dedicated and driven as he is.',
      position: 'Coordinator of Media Productions at Miami University ',
      image: 'assets/andrew-gerber.png',
      phone: '(810) 228-5457',
      email: 'gerbera5@miamioh.edu'
    }
  ];

  public references: Reference[] = [
    {
      name: 'Clinton Yates',
      position: 'Columnist, Television Commentator and Host for ESPN. Columnist for ESPN’s The Undefeated and Panelist on Around the Horn.',
      image: 'assets/clinton-yates.png',
      phone: '(202) 657-1785',
      email: 'clintonyates@gmail.com'
    },
    {
      name: 'Terence Moore',
      position: 'Contributing Columnist for Forbes.com, CNN, CNN.com, MSNBC, ESPN’s Outside The Lines and The Undefeated.',
      image: 'assets/terence-moore.png',
      twitter: '@tmooresports'
    },
    {
      name: 'Steve Baker',
      position: 'Voice of the Miami RedHawks and Director of Broadcasting at Miami University',
      image: 'assets/steve-baker.png',
      phone: '(513) 529-7288',
      email: 'bakersa@miamioh.edu'
    },
    {
      name: 'Patti Newberry',
      position: 'President of the Society of Professional Journalists (SPJ) and Area Coordinator of Journalism at Miami University',
      image: 'assets/patti-newberry.png',
      phone: '(513) 529-5893',
      email: 'newberpg@miamioh.edu'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}

interface Reference {
  name: string,
  quote?: string,
  position: string,
  image: string,
  phone?: string,
  email?: string,
  twitter?: string
}
