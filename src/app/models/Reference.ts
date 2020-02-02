export const quoteReferences : Quote[] = [
    {
        name: 'Peter Moses',
        quote: 'Bennett is a <b>triple threat</b> as a broadcast journalist; he <b>understands his subject matter</b>, delivers it with panache and ease and looks and sounds good doing so. He <b>works tirelessly</b> preparing for each broadcast and therefore never gets tripped up regardless of what is taking place before our eyes.'
    },
    {
        name: 'Andrew Gerber',
        quote: 'Bennett is an <b>extremely hard worker</b> and always has a positive attitude. He enjoys taking on new roles and <b>learns quickly</b> how to become very talented in a variety of positions. Bennett has grown into a <b>leader</b> for us, I’ve not had any student come through who is as <b>dedicated and driven</b> as he is.'
    }
];

export const references: Reference[] = [
    {
        name: 'Andrew Gerber',
        position: [
            'Coordinator of Media Productions at Miami University'
        ],
        image: 'assets/andrew-gerber.png',
        phone: '(810) 228-5457',
        email: 'gerbera5@miamioh.edu'
    },
    {
        name: 'Clinton Yates',
        position: [
            'Columnist, Television Commentator and Host for ESPN',
            'Columnist for ESPN’s The Undefeated and Panelist on Around the Horn'
        ],
        image: 'assets/clinton-yates.png',
        imageSource: 'ESPNPressroom.com',
        phone: '(202) 657-1785',
        email: 'clintonyates@gmail.com'
    },
    {
        name: 'Terence Moore',
        position: [
            'Contributing Columnist for Forbes.com, CNN, CNN.com, MSNBC, ESPN’s Outside The Lines and The Undefeated.'
        ],
        image: 'assets/terence-moore.png',
        imageSource: 'Forbes.com',
        twitter: '@tmooresports'
    },
    {
        name: 'Steve Baker',
        position: [
            'Voice of the Miami RedHawks',
            'Director of Broadcasting at Miami University'
        ],
        image: 'assets/steve-baker.png',
        phone: '(513) 529-7288',
        email: 'bakersa@miamioh.edu'
    },
    {
        name: 'Patti Newberry',
        position: [
            'President of the Society of Professional Journalists (SPJ)',
            'Area Coordinator of Journalism at Miami University'
        ],
        image: 'assets/patti-newberry.png',
        phone: '(513) 529-5893',
        email: 'newberpg@miamioh.edu'
    },
    {
        name: 'Peter Moses',
        position: [
            'Former Crime and Politics Reporter for the New York Post and Investigative and Political Producer at WWOR-TV',
            'Founder of Moses Communications'
        ],
        image: 'assets/peter-moses.png',
        phone: '(914) 815-5650',
        email: 'peter.moses2007@gmail.com'
    },
];

interface Quote {
    name: string,
    quote: string
}

interface Reference {
    name: string,
    quote?: string,
    position: string[],
    image: string,
    imageSource?: string,
    phone?: string,
    email?: string,
    twitter?: string
}