'use strict';

const colors = {
    g: '#077d3f',
    gp: '#0cc964',
    r: '#db251f',
    rp: '#ff1008',
    b: '#0f8fb8',
    bp: '#12afe3',
    y: '#dec312',
    yp: '#ffdf0d'
}

const positions = {
    1: { x: 700, y: 100, c: colors.g },
    2: { x: 700, y: 200 },
    3: { x: 700, y: 300 },
    4: { x: 700, y: 400 },
    5: { x: 700, y: 500 },
    6: { x: 800, y: 500 },
    7: { x: 900, y: 500 },
    8: { x: 1000, y: 500 },
    9: { x: 1100, y: 500 },
    10: { x: 1100, y: 600 },
    11: { x: 1100, y: 700, c: colors.r },
    12: { x: 1000, y: 700 },
    13: { x: 900, y: 700 },
    14: { x: 800, y: 700 },
    15: { x: 700, y: 700 },
    16: { x: 700, y: 800 },
    17: { x: 700, y: 900 },
    18: { x: 700, y: 1000 },
    19: { x: 700, y: 1100 },
    20: { x: 600, y: 1100 },
    21: { x: 500, y: 1100, c: colors.b },
    22: { x: 500, y: 1000 },
    23: { x: 500, y: 900 },
    24: { x: 500, y: 800 },
    25: { x: 500, y: 700 },
    26: { x: 400, y: 700 },
    27: { x: 300, y: 700 },
    28: { x: 200, y: 700 },
    29: { x: 100, y: 700 },
    30: { x: 100, y: 600 },
    31: { x: 100, y: 500, c: colors.y },
    32: { x: 200, y: 500 },
    33: { x: 300, y: 500 },
    34: { x: 400, y: 500 },
    35: { x: 500, y: 500 },
    36: { x: 500, y: 400 },
    37: { x: 500, y: 300 },
    38: { x: 500, y: 200 },
    39: { x: 500, y: 100 },
    40: { x: 600, y: 100 },
    gh1: { x: 1000, y: 100 },
    gh2: { x: 1000, y: 200 },
    gh3: { x: 1100, y: 100 },
    gh4: { x: 1100, y: 200 },
    rh1: { x: 1100, y: 1000 },
    rh2: { x: 1100, y: 1100 },
    rh3: { x: 1000, y: 1100 },
    rh4: { x: 1000, y: 1000 },
    bh1: { x: 200, y: 1100 },
    bh2: { x: 100, y: 1100 },
    bh3: { x: 100, y: 1000 },
    bh4: { x: 200, y: 1000 },
    yh1: { x: 100, y: 200 },
    yh2: { x: 100, y: 100 },
    yh3: { x: 200, y: 100 },
    yh4: { x: 200, y: 200 },
    gf1: { x: 600, y: 200 },
    gf2: { x: 600, y: 300 },
    gf3: { x: 600, y: 400 },
    gf4: { x: 600, y: 500 },
    rf1: { x: 1000, y: 600 },
    rf2: { x: 900, y: 600 },
    rf3: { x: 800, y: 600 },
    rf4: { x: 700, y: 600 },
    bf1: { x: 600, y: 1000 },
    bf2: { x: 600, y: 900 },
    bf3: { x: 600, y: 800 },
    bf4: { x: 600, y: 700 },
    yf1: { x: 200, y: 600 },
    yf2: { x: 300, y: 600 },
    yf3: { x: 400, y: 600 },
    yf4: { x: 500, y: 600 }
};

const start = {
    g: 1,
    r: 11,
    b: 21,
    y: 31
};

const pawns = {
    g1: { p: 'gh1', s: 0 },
    g2: { p: 'gh2', s: 0 },
    g3: { p: 'gh3', s: 0 },
    g4: { p: 'gh4', s: 0 },
    r1: { p: 'rh1', s: 0 },
    r2: { p: 'rh2', s: 0 },
    r3: { p: 'rh3', s: 0 },
    r4: { p: 'rh4', s: 0 },
    b1: { p: 'bh1', s: 0 },
    b2: { p: 'bh2', s: 0 },
    b3: { p: 'bh3', s: 0 },
    b4: { p: 'bh4', s: 0 },
    y1: { p: 'yh1', s: 0 },
    y2: { p: 'yh2', s: 0 },
    y3: { p: 'yh3', s: 0 },
    y4: { p: 'yh4', s: 0 },
}

const players = [
    { color: 'b', name: '' },
    { color: 'y', name: '' },
    { color: 'g', name: '' },
    { color: 'r', name: '' }
];

const boardSvg = document.getElementById('board');

let dice = 0;

createBoard();
addPawns();

function createBoard() {
    // draw lines
    const line = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    line.setAttribute('fill', 'transparent');
    line.setAttribute('stroke', 'black');
    line.setAttribute('stroke-width', '5');
    line.setAttribute('d', 'M500 100 H700 V100 H700 V500 H1100 V500 H1100 V700 ' +
        'H700 V700 H700 V1100 H500 V1100 H500 V700 H100 V700 H100 V500 H500 V500 Z');
    boardSvg.appendChild(line);

    // draw circles
    for (const [key, pos] of Object.entries(positions)) {
        const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circle.setAttribute('fill', colors[key[0]] || pos.c || 'white');
        circle.setAttribute('stroke', 'black');
        circle.setAttribute('stroke-width', '5');
        circle.setAttribute('cx', pos.x)
        circle.setAttribute('cy', pos.y)
        circle.setAttribute('r', key[1] === 'f' ? '30': (key[1] === 'h' ? '34' : '38'))
        boardSvg.appendChild(circle);
        pos.o = circle;
    }

    // add text
    addText(250, 375, 'Mens');
    addText(950, 375, 'erger');
    addText(250, 845, 'je');
    addText(950, 845, 'niet');

    // add arrows
    [
        { x: 435, y: 970, r: 0 },
        { x: 230, y: 435, r: 90 },
        { x: 765, y: 230, r: 180 },
        { x: 970, y: 765, r: 270 },
    ].forEach(function (pos) {
        let group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        // group.setAttribute('transform', 'translate(435,970)')
        group.setAttribute('transform', 'translate(' + pos.x + ',' + pos.y + '),rotate(' + pos.r + ')');
        group.setAttribute('fill', 'none');
        group.setAttribute('stroke', 'black');
        group.setAttribute('stroke-width', '2');
        let polygon = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
        polygon.setAttribute('fill', 'black');
        polygon.setAttribute('stroke', 'none');
        polygon.setAttribute('points', '0,0 -10,25 0,15 10,25');
        group.appendChild(polygon);
        let path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('id', 'arrow');
        path.setAttribute('d', 'M0 10 H0 V135 ' +
            'M-10 125 L0 115 L10 125 ' +
            'M-10 130 L0 120 L10 130 ' +
            'M-10 135 L0 125 L10 135 ' +
            'M-10 140 L0 130 L10 140 ' +
            'M-10 145 L0 135 L10 145');
        group.appendChild(path);
        boardSvg.appendChild(group);
    });

    addName(150,275, 'name-y');
    addName(1050,275, 'name-g');
    addName(150,1175, 'name-b');
    addName(1050,1175, 'name-r');
}

function addText(x, y, text) {
    let elm = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    elm.setAttribute('x', x);
    elm.setAttribute('y', y);
    elm.setAttribute('class', 'mensergerjeniet');
    elm.setAttribute('text-anchor', 'middle');
    elm.textContent = text;
    boardSvg.appendChild(elm);
}

function addName(x, y, id) {
    let elm = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    elm.setAttribute('x', x);
    elm.setAttribute('y', y);
    elm.setAttribute('class', 'name');
    elm.setAttribute('text-anchor', 'middle');
    elm.setAttribute('id', id);
    // elm.textContent = text;
    boardSvg.appendChild(elm);
}

function addPawns() {
    for (const [key, pawn] of Object.entries(pawns)) {
        const group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        group.setAttribute('id', key);
        group.setAttribute('class', 'pawn pawn-' + key[0]);
        group.setAttribute('transform', 'translate(' +
            positions[pawn.p]['x'] + ',' +
            positions[pawn.p]['y'] + '),rotate(10)');
        group.setAttribute('fill', colors[key[0] + 'p']);
        group.setAttribute('stroke', 'black');
        group.setAttribute('stroke-width', '3');
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', 'M-5 -50 L-15 10 L15 10 L5 -50');
        group.appendChild(path);
        const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circle.setAttribute('cx', '0')
        circle.setAttribute('cy', '-55')
        circle.setAttribute('r', '15')
        group.appendChild(circle);
        boardSvg.appendChild(group);
        pawn.o = group;
        positions[pawn.p].p = key;

        // pawn click handler
        group.addEventListener('click', () => {
            if ((pawn.o.dataset.movable === 'y') && pawn.n) {
                resetMovable();
                movePawn(pawn);
            }
        });

        // highlight gerelateerde positie bij mouse-over
        group.addEventListener('mouseenter', () => {
            if ((pawn.o.dataset.movable === 'y') && pawn.n) {
                positions[pawn.n].o.classList.add('highlight');
            }
        });
        group.addEventListener('mouseleave', () => {
            if (pawn.n) {
                positions[pawn.n].o.classList.remove('highlight');
            }
        });

    }
}

function XmovePawn(key, steps) {
    const pawn = pawns[key];
    const color = key[0];
    if (pawn === undefined) {
        return false;
    }
    let newpos = null;
    // place pawn on board
    if (pawn.p[1] === 'h') {
        if (steps !== 6) {
            return false;
        }
        newpos = start[color];
        pawn.s = 1;
    }
    // remove pawn from board
    else if (steps === -1) {
        for (let i = 1; i <= 4; i++) {
             if (positions[color + 'h' + String(i)].p === undefined) {
                 newpos = color + 'h' + String(i);
                 pawn.s = 0;
                 break;
             }
        }
    }
    // move pawn forward
    else if (1 <= steps <= 6) {
        newpos = pawn.p + steps;
        pawn.s += steps;
    }

    // walk around
    if (newpos > 40) {
        newpos -= 40;
    }

    // bring to finish
    if (pawn.s > 40) {
        let fpos = pawn.s - 40;
        if (fpos > 4) {
            fpos = 4 - (fpos - 4);
        }
        newpos = color + 'f' + String(fpos);
    }


    if (newpos !== null) {
        // check if position is used and handle it
        if (positions[newpos].p !== undefined) {
            movePawn(positions[newpos].p, -1);
        }

        delete positions[pawn.p].p;
        positions[newpos].p = key;
        pawn.p = newpos;

        pawns[key]['o'].setAttribute('transform', 'translate(' +
            positions[pawn.p]['x'] + ',' +
            positions[pawn.p]['y'] + '),rotate(15)');
    }

}

let player = -1;

let game = {
    dice: 0,
    state: '',
    activePlayer: 0,
    throwCount: 0
};

// document.getElementById('movebutton').addEventListener('click', (e) => {
//     doStep();
// });

// document.getElementById('startbutton').addEventListener('click', (e) => {
//     e.target.disabled = 'disabled';
//     play();
// });

/*
function autoplay() {
    doStep();
    setTimeout(() => {
        autoplay();
    }, 100);
}
*/

function doStep() {
    player = player === 3 ? 0 : player + 1;
    const color = players[player].color;
    let steps = 1 + Math.floor(Math.random() * 6);
    let pawn;
    if (steps === 6) {
        for (let i = 4; i >= 1; i--) {
            if (pawns[color + String(i)].s === 0) {
                pawn = color + String(i);
            }
        }
        if (pawn !== undefined) {
            console.log(color.toUpperCase() + ' throws: 6 and puts pawn ' + pawn.toUpperCase() + ' on board');
            movePawn(pawn, steps);
            steps = 1 + Math.floor(Math.random() * 6);
        }
    }
    if (pawn === undefined) {
        for (let i = 1; i <= 4; i++) {
            if ((pawns[color + String(i)].s > 0) && (pawns[color + String(i)].s <= 40)) {
                pawn = color + String(i);
                break;
            }
        }
    }
    if (pawn !== undefined) {
        console.log(color.toUpperCase() + ' throws: ' + steps + ' and move pawn ' + pawn.toUpperCase() + ' forward');
        movePawn(pawn, steps);
        return;
    }
    console.log(color.toUpperCase() + ' throws: ' + steps + ' no moves possible');
}

document.getElementById('dicebtn').addEventListener('click', (e) => {
    e.currentTarget.setAttribute('disabled', 'disabled');
    rollDice();
});

// document.getElementById('dice').addEventListener('thrown', (e) => {
//     console.log(e.value);
//     document.getElementById('dicebtn').removeAttribute('disabled');
//     // movePawn('y1', e.value);
// });

function rollDice() {
    // const number = Math.floor((Math.random() * 6) + 1);
    let number = Math.floor((Math.random() * 10) + 1);
    number = number > 6 ? 6 : number;
    const current = Number.parseInt(document.getElementById('dice').dataset.number || '1');
    document.getElementById('dice').setAttribute('class', 'dice show-' + String(7-current));
    setTimeout(() => {
        document.getElementById('dice').setAttribute('class', 'dice show-' + String(number));
    }, 200);
    setTimeout(() => {
        // const event = new Event('thrown');
        // event.value = number;
        // document.getElementById('dice').dispatchEvent(event);
        game.dice = number;
        playGame();
        // document.getElementById('dice').dataset.number = String(number);
    }, 500);
}

function clickPawn(pawn) {
    if (dice) {
        console.log(pawn);
        movePawn(pawn, dice);
        dice = 0;
    }
}

// startknop op namen formulier afhandelen
document.getElementById('startbutton').addEventListener('click', () => {

    // verzamel namen
    let playernames = [];
    document.querySelectorAll('#names input').forEach((obj) => {
        if (obj.value.length) {
            playernames.push(obj.value)
        }
    });

    // toon error
    if (playernames.length < 1) {
        document.getElementById('names-error').classList.remove('hidden');
        return;
    }
    document.getElementById('names-error').classList.add('hidden');

    // voeg bots toe
    while (playernames.length < 4) {
        playernames.push('MejnBot')
    }

    // hussel spelers
    playernames.sort(() => 0.5 - Math.random());

    // zet spelers op bord
    playernames.forEach((name, idx) => {
        players[idx].name = name;
        document.getElementById('name-' + players[idx].color).textContent = name;
        players[idx].stats = {
            turns: 0,
            total: 0,
            locked: 0,
            kicks: 0,
            kicked: 0
        };
    });

    // verberg naamformulier en spelregels
    document.getElementById('names').classList.add('hidden');
    document.getElementById('rules').classList.add('hidden');

    // toon gameplay element
    document.getElementById('gameplay').classList.remove('hidden');

    // start spel
    player = 0;
    game.activePlayer = -1;
    game.state = 'nextPlayer';

    playGame();
});

function playGame() {
    switch (game.state) {
        case 'nextPlayer':
            game.activePlayer = game.activePlayer < 3 ? game.activePlayer + 1 : 0;
            // game.activePlayer = 1; //game.activePlayer < 3 ? game.activePlayer + 1 : 0;
            players[game.activePlayer].stats.turns++;
            console.log(players[game.activePlayer].name + ' moet gooien');
            document.getElementById('dicebtn').removeAttribute('disabled');
            game.state = 'throw';
            game.throwCount = 0;
            break;
        case 'throw':
            game.throwCount++;
            console.log(players[game.activePlayer].name + ' heeft ' + game.dice + ' gegooid');
            // controleer of speler een zet kan doen
            if (!canMove(players[game.activePlayer].color, game.dice)) {
                console.log(players[game.activePlayer].name + ' kan niets doen met deze worp');
                game.state = 'nextPlayer';
                return playGame();
            }
            console.log(players[game.activePlayer].name + ' moet een pion zetten');
            break;
        case 'moved':
            // @todo check for win
            // volgende speler als geen 6 en niet 2 maal gegooid
            if ((game.throwCount > 1) || (game.dice !== 6)) {
                game.state = 'nextPlayer';
                return playGame();
            }
            // nogmaals gooien
            console.log(players[game.activePlayer].name + ' moet nog een keer gooien');
            document.getElementById('dicebtn').removeAttribute('disabled');
            game.state = 'throw';
            break;
    }
}

// controleer of kleur kan zetten
function canMove(color, dice) {
    let can = false;
    for (const [key, pawn] of Object.entries(pawns)) {
        pawn.o.dataset.movable = '';
    }
    for (let i = 1; i <= 4; i++) {
        const pawn = pawns[color + i.toString()];
        pawn.n = nextPos(pawn, dice);
        if (pawn.n) {
            pawn.o.dataset.movable = 'y';
            can = true;
        } else {
            pawn.o.dataset.movable = 'n';
        }
    }
    return can;
}

// bepaal positie waar pion naartoe verplaatst bij worp
function nextPos(pawn, dice) {
    if (typeof pawn === 'string') {
        pawn = pawns[pawn];
    }
    let color = pawn.o.id[0];
    let pos;

    // pion naar eindpositie?
    if (pawn.s + dice > 40) {
        pos = pawn.s + dice - 40;
        if (pos > 4) {
            pos = 4 - (pos - 4);
        }
        pos = color + 'f' + pos.toString();
        // positie vrij?
        return (positions[pos] !== undefined) && (positions[pos].p === undefined) ? pos : null;
    }

    // pion naar startpositie of verpaatsen op bord?
    if (pawn.s === 0) {
        if (dice < 6) {
            return null;
        }
        pos = start[color];
    } else {
        pos = pawn.p + dice;
        if (pos > 40) {
            pos -= 40;
        }
    }
    // voorkom zelf-slag
    console.log(pos);
    return positions[pos].p !== undefined && positions[pos].p[0] === color ? null : pos;
}

// verzet pion
function movePawn(pawn) {
    const pawnId = pawn.o.id;
    if (positions[pawn.n].p !== undefined) {
        returnPawn(positions[pawn.n].p);
    }
    console.log('verplaats #' + pawnId + ' naar ' + pawn.n);
    delete positions[pawn.p].p;
    positions[pawn.n].p = pawnId;
    positions[pawn.n].o.classList.remove('highlight');
    pawn.p = pawn.n;
    pawn.o.setAttribute('transform', 'translate(' +
        positions[pawn.p].x + ',' +
        positions[pawn.p].y + '),rotate(15)');
    for (const [key, pawn] of Object.entries(pawns)) {
        delete pawn.n;
    }
    if (pawn.s === 0) {
        pawn.s = 1;
    } else if (pawn.p <= 40) {
        pawn.s += game.dice;
    } else if (pawn.p[1] === 'f') {
        pawn.s = 40 + Number(pawn.p[2]);
    }
    console.log('steps = ' + pawn.s);

    game.state = 'moved';
    playGame();
}

// sla pion van bord
function returnPawn(pawnId) {
    const color = pawnId[0];
    const pawn = pawns[pawnId];
    for (let i = 1; i <= 4; i++) {
        if (positions[color + 'h' + i.toString()].p === undefined) {
            console.log('zet #' + pawnId + ' terug in thuishonk');
            const newpos = color + 'h' + i.toString();
            delete positions[pawn.p].p;
            positions[newpos].p = pawnId;
            pawn.s = 0;
            pawn.p = newpos;
            pawn.o.setAttribute('transform', 'translate(' +
                positions[pawn.p].x + ',' +
                positions[pawn.p].y + '),rotate(15)');
            return true;
        }
    }
    return false;
}

function resetMovable() {
    for (const [, pawn] of Object.entries(pawns)) {
        pawn.o.dataset.movable = '';
    }
}
