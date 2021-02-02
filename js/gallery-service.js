console.log('Starting up');

var gProjs = [{
        id: 0,
        name: 'MineSweeper',
        title: 'Sweep \'em MINES',
        shortDesc: 'Try to get away from those Mines!',
        desc: 'The classic - with some more LIVES!',
        publishedAt: '22/01/-2021',
        labels: 'HTML, CSS, Javascript'
    },
    {
        id: 1,
        name: 'BookStore',
        title: 'Cause reading is Fundamental',
        desc: 'Book Store interface, Edit and Browse your Book-List;',
        publishedAt: '28/01/2021',
        labels: 'HTML, CSS, Javascript'
    },
    {
        id: 2,
        name: 'Touch The Nums',
        title: 'One by one, even two by two..',
        desc: 'Try to follow the numbers one by one and set a new High Score!',
        publishedAt: '17/01/2021',
        labels: 'HTML, CSS, Javascript'
    }
];

function getProjById(id) {
    return gProjs[id];
}