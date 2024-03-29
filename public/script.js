const canvas2 = document.getElementById('arabic-word');
const ctx2 = canvas2.getContext('2d');
/* :::::::::::::::: Grid ::::::::::::::::*/
const ctxGRID = canvas2.getContext('2d');
ctxGRID.lineWidth = 1;
// ctxGRID.strokeStyle = "#FF0000";
ctxGRID.font = "10px Arial";
let letters = []
let letter;
let b = 50;
let h = 250;
let lx = 100;
let hb = 50 / 2;
let p = {
    startX: 0,
    startY: 0,
    endX: 0,
    endY: 0
}
ctx2.lineWidth = 5;
for (let x = 0; x <= 1000; x += b) {
    ctxGRID.fillText("(" + x + ")", x, 10);
    for (let y = 0; y <= 800; y += b) {
        ctxGRID.fillText("(" + y + ")", 10, y + 10);
        ctxGRID.moveTo(x, y);
        ctxGRID.lineTo(x, y + 1);
    }
}
ctxGRID.stroke();
// ctx2.strokeStyle = "#000000";
/* :::::::::::::::: Letter 1 ::::::::::::::::*/
startP = [900, 100]
letter = {
    name: 'ALEF',
    moves: []
}
p.endX = startP[0];
p.endY = startP[1];
startP = [p.endX, p.endY]
/*----------  Part  1 ----D------*/
dx = 0;
dy = h;
p = set_p(p.endX, p.endY, dx, dy);
drawP(ctx2, p);
letter.moves.push({ dir: 'D', dx: dx, dy: dy, endX: p.endX, endY: p.endY });
/*----------  Part  2 ----L------*/
dx = -b;
dy = 0;
p = set_p(p.endX, p.endY, dx, dy);
drawP(ctx2, p);
letter.moves.push({ dir: 'L', dx: dx, dy: dy, endX: p.endX, endY: p.endY });
/*----------  Part  3 -----U-----*/
dx = 0;
dy = -h + b;
p = set_p(p.endX, p.endY, dx, dy);
drawP(ctx2, p);
letter.moves.push({ dir: 'U', dx: dx, dy: dy, endX: p.endX, endY: p.endY });
/*----------  Part  4 -----U/R-----*/
dx = b;
dy = - b;
p = set_p(p.endX, p.endY, dx, dy);
drawP(ctx2, p);
letter.moves.push({ dir: 'UR', dx: dx, dy: dy, endX: p.endX, endY: p.endY });
//-----.....---------.....---------.....----
letters.push(letter);
/* :::::::::::::::: Letter 2 ::::::::::::::::*/
letter = {
    name: 'LAM',
    moves: []
}
p.endX = startP[0] - lx;
p.endY = startP[1];
startP = [p.endX, p.endY]
/*----------  Part  1 ------D----*/
dx = 0;
dy = h;
p = set_p(p.endX, p.endY, dx, dy);
drawP(ctx2, p)
letter.moves.push({ dir: 'D', dx: dx, dy: dy, endX: p.endX, endY: p.endY });
/*----------  Part  2 ------L---*/
dx = -100;
dy = 0;
p = set_p(p.endX, p.endY, dx, dy);
drawP(ctx2, p)
letter.moves.push({ dir: 'L', dx: dx, dy: dy, endX: p.endX, endY: p.endY });
/*----------  Part  3 ------U----*/
dx = 0;
dy = -b;
p = set_p(p.endX, p.endY, dx, dy);
drawP(ctx2, p)
letter.moves.push({ dir: 'U', dx: dx, dy: dy, endX: p.endX, endY: p.endY });
/*----------  Part  4 -----R-----*/
dx = b;
dy = 0;
p = set_p(p.endX, p.endY, dx, dy);
drawP(ctx2, p)
letter.moves.push({ dir: 'R', dx: dx, dy: dy, endX: p.endX, endY: p.endY });
/*----------  Part  5 -------U---*/
dx = 0;
dy = -h + 2 * b;
p = set_p(p.endX, p.endY, dx, dy);
drawP(ctx2, p)
letter.moves.push({ dir: 'U', dx: dx, dy: dy, endX: p.endX, endY: p.endY });
// /*----------  Part  6 ------UR----*/
dx = b;
dy = -b;
p = set_p(p.endX, p.endY, dx, dy);
drawP(ctx2, p)
letter.moves.push({ dir: 'UR', dx: dx, dy: dy, endX: p.endX, endY: p.endY });
//-----.....---------.....---------.....----
letters.push(letter);
/* :::::::::::::::: Letter 3 ::::::::::::::::*/
letter = {
    name: 'AEEN',
    moves: []
}
p.endX = startP[0] - lx;
p.endY = startP[1] + h - b;
startP = [p.endX, p.endY]
/*----------  Part  1 ------L----*/
dx = -b;
dy = 0;
p = set_p(p.endX, p.endY, dx, dy);
drawP(ctx2, p)
letter.moves.push({ dir: 'L', dx: dx, dy: dy, endX: p.endX, endY: p.endY });
/*----------  Part  2 ------UP----*/
dx = b;
dy = -b;
p = set_p(p.endX, p.endY, dx, dy);
drawP(ctx2, p)
letter.moves.push({ dir: 'UR', dx: dx, dy: dy, endX: p.endX, endY: p.endY });
/*----------  Part  3 ------U----*/
dx = 0;
dy = -b;
p = set_p(p.endX, p.endY, dx, dy);
drawP(ctx2, p)
letter.moves.push({ dir: 'U', dx: dx, dy: dy, endX: p.endX, endY: p.endY });
/*----------  Part  4 ------L----*/
dx = -2 * b;
dy = 0;
p = set_p(p.endX, p.endY, dx, dy);
drawP(ctx2, p)
letter.moves.push({ dir: 'L', dx: dx, dy: dy, endX: p.endX, endY: p.endY });
/*----------  Part  5 ------D----*/
dx = 0;
dy = b;
p = set_p(p.endX, p.endY, dx, dy);
drawP(ctx2, p)
letter.moves.push({ dir: 'D', dx: dx, dy: dy, endX: p.endX, endY: p.endY });
/*----------  Part  6 ------DR----*/
dx = b;
dy = b;
p = set_p(p.endX, p.endY, dx, dy);
drawP(ctx2, p)
letter.moves.push({ dir: 'DR', dx: dx, dy: dy, endX: p.endX, endY: p.endY });
/*----------  Part  7 ------L----*/
dx = -b;
dy = 0;
p = set_p(p.endX, p.endY, dx, dy);
drawP(ctx2, p)
letter.moves.push({ dir: 'L', dx: dx, dy: dy, endX: p.endX, endY: p.endY });
/*----------  Part  8 ------D----*/
dx = 0;
dy = b;
p = set_p(p.endX, p.endY, dx, dy);
drawP(ctx2, p)
letter.moves.push({ dir: 'D', dx: dx, dy: dy, endX: p.endX, endY: p.endY });
/*----------  Part  9 ------R----*/
dx = 3 * b;
dy = 0;
p = set_p(p.endX, p.endY, dx, dy);
drawP(ctx2, p)
letter.moves.push({ dir: 'R', dx: dx, dy: dy, endX: p.endX, endY: p.endY });
//-----.....---------.....---------.....----
letters.push(letter);
/* :::::::::::::::: Letter 4 ::::::::::::::::*/
letter = {
    name: 'RAA',
    moves: []
}
p.endX = startP[0] - lx;
p.endY = startP[1] + 0;
startP = [p.endX, p.endY]
/*----------  Part  1 ------L----*/
dx = -b;
dy = 0;
p = set_p(p.endX, p.endY, dx, dy);
drawP(ctx2, p)
letter.moves.push({ dir: 'L', dx: dx, dy: dy, endX: p.endX, endY: p.endY });
/*----------  Part  2 ------D----*/
dx = 0;
dy = 2 * b;
p = set_p(p.endX, p.endY, dx, dy);
drawP(ctx2, p)
letter.moves.push({ dir: 'D', dx: dx, dy: dy, endX: p.endX, endY: p.endY });
/*----------  Part  3 ------L----*/
dx = -b;
dy = 0;
p = set_p(p.endX, p.endY, dx, dy);
drawP(ctx2, p)
letter.moves.push({ dir: 'L', dx: dx, dy: dy, endX: p.endX, endY: p.endY });
/*----------  Part  4 ------D----*/
dx = 0;
dy = b;
p = set_p(p.endX, p.endY, dx, dy);
drawP(ctx2, p)
letter.moves.push({ dir: 'D', dx: dx, dy: dy, endX: p.endX, endY: p.endY });
/*----------  Part  5 ------R----*/
dx = 2 * b;
dy = 0;
p = set_p(p.endX, p.endY, dx, dy);
drawP(ctx2, p)
letter.moves.push({ dir: 'R', dx: dx, dy: dy, endX: p.endX, endY: p.endY });
/*----------  Part  6 ------U----*/
dx = 0;
dy = -2 * b;
p = set_p(p.endX, p.endY, dx, dy);
drawP(ctx2, p)
letter.moves.push({ dir: 'U', dx: dx, dy: dy, endX: p.endX, endY: p.endY });
//-----.....---------.....---------.....----
letters.push(letter);
/* :::::::::::::::: Letter 5 ::::::::::::::::*/
letter = {
    name: 'BA',
    moves: []
}
p.endX = startP[0] - lx;
p.endY = startP[1] - b;
startP = [p.endX, p.endY]
/*----------  Part  1 ------L----*/
dx = -b;
dy = 0;
p = set_p(p.endX, p.endY, dx, dy);
drawP(ctx2, p)
letter.moves.push({ dir: 'L', dx: dx, dy: dy, endX: p.endX, endY: p.endY });
/*----------  Part  2 ------D----*/
dx = 0;
dy = b;
p = set_p(p.endX, p.endY, dx, dy);
drawP(ctx2, p)
letter.moves.push({ dir: 'D', dx: dx, dy: dy, endX: p.endX, endY: p.endY });
/*----------  Part  3 ------L----*/
dx = -b;
dy = 0;
p = set_p(p.endX, p.endY, dx, dy);
drawP(ctx2, p)
letter.moves.push({ dir: 'L', dx: dx, dy: dy, endX: p.endX, endY: p.endY });
/*----------  Part  4 ------D----*/
dx = 0;
dy = b;
p = set_p(p.endX, p.endY, dx, dy);
drawP(ctx2, p)
letter.moves.push({ dir: 'D', dx: dx, dy: dy, endX: p.endX, endY: p.endY });
/*----------  Part  5 ------R----*/
dx = 2 * b;
dy = 0;
p = set_p(p.endX, p.endY, dx, dy);
drawP(ctx2, p)
letter.moves.push({ dir: 'R', dx: dx, dy: dy, endX: p.endX, endY: p.endY });
/*----------  Part  6 ------U----*/
dx = 0;
dy = - 2 * b;
p = set_p(p.endX, p.endY, dx, dy);
drawP(ctx2, p)
letter.moves.push({ dir: 'U', dx: dx, dy: dy, endX: p.endX, endY: p.endY });
/*----------  Part  7 ------DOT----*/
drawPoint(400, h + 3 * b, b);
// letter.moves.push({ dir: 'DOT', dx: dx, dy: dy, endX: p.endX, endY: p.endY });
//-----.....---------.....---------.....----
letters.push(letter);
/* :::::::::::::::: Letter 6 ::::::::::::::::*/
letter = {
    name: 'YAA',
    moves: []
}
p.endX = startP[0] - lx;
p.endY = startP[1];
startP = [p.endX, p.endY]
/*----------  Part  1 ------L----*/
dx = -b;
dy = 0;
p = set_p(p.endX, p.endY, dx, dy);
drawP(ctx2, p)
letter.moves.push({ dir: 'L', dx: dx, dy: dy, endX: p.endX, endY: p.endY });
/*----------  Part  2 ------D----*/
dx = 0;
dy = b;
p = set_p(p.endX, p.endY, dx, dy);
drawP(ctx2, p)
letter.moves.push({ dir: 'D', dx: dx, dy: dy, endX: p.endX, endY: p.endY });
/*----------  Part  3 ------L----*/
dx = -b;
dy = 0;
p = set_p(p.endX, p.endY, dx, dy);
drawP(ctx2, p)
letter.moves.push({ dir: 'L', dx: dx, dy: dy, endX: p.endX, endY: p.endY });
/*----------  Part  4 ------D----*/
dx = 0;
dy = b;
p = set_p(p.endX, p.endY, dx, dy);
drawP(ctx2, p)
letter.moves.push({ dir: 'D', dx: dx, dy: dy, endX: p.endX, endY: p.endY });
/*----------  Part  5 ------R----*/
dx = 2 * b;
dy = 0;
p = set_p(p.endX, p.endY, dx, dy);
drawP(ctx2, p)
letter.moves.push({ dir: 'R', dx: dx, dy: dy, endX: p.endX, endY: p.endY });
/*----------  Part  6 ------U----*/
dx = 0;
dy = - 2 * b;
p = set_p(p.endX, p.endY, dx, dy);
drawP(ctx2, p)
letter.moves.push({ dir: 'U', dx: dx, dy: dy, endX: p.endX, endY: p.endY });
/*----------  Part  7 ------DOT----*/
drawPoint(300, h + 3 * b, b);
drawPoint(300, h + 4 * b, b);
/* :::::::::::::::: Letter 7 ::::::::::::::::*/
letter = {
    name: 'HAA',
    moves: []
}
p.endX = startP[0] - lx;
p.endY = startP[1] + b;
startP = [p.endX, p.endY]
/*----------  Part  1 ------U----*/
dx = 0;
dy = - 2 * b;
p = set_p(p.endX, p.endY, dx, dy);
drawP(ctx2, p)
letter.moves.push({ dir: 'U', dx: dx, dy: dy, endX: p.endX, endY: p.endY });
/*----------  Part  2 ------L----*/
dx = -b;
dy = 0;
p = set_p(p.endX, p.endY, dx, dy);
drawP(ctx2, p)
letter.moves.push({ dir: 'L', dx: dx, dy: dy, endX: p.endX, endY: p.endY });
/*----------  Part  3 ------DL----*/
dx = -b;
dy = b;
p = set_p(p.endX, p.endY, dx, dy);
drawP(ctx2, p)
letter.moves.push({ dir: 'DL', dx: dx, dy: dy, endX: p.endX, endY: p.endY });
/*----------  Part  4 ------D----*/
dx = 0;
dy = b;
p = set_p(p.endX, p.endY, dx, dy);
drawP(ctx2, p)
letter.moves.push({ dir: 'D', dx: dx, dy: dy, endX: p.endX, endY: p.endY });
/*----------  Part  5 ------R----*/
dx = b;
dy = 0;
p = set_p(p.endX, p.endY, dx, dy);
drawP(ctx2, p)
letter.moves.push({ dir: 'R', dx: dx, dy: dy, endX: p.endX, endY: p.endY });
/*----------  Part  6 ------D----*/
dx = 0;
dy = b;
p = set_p(p.endX, p.endY, dx, dy);
drawP(ctx2, p)
letter.moves.push({ dir: 'D', dx: dx, dy: dy, endX: p.endX, endY: p.endY });
/*----------  Part  7 ------R----*/
dx = b;
dy = 0;
p = set_p(p.endX, p.endY, dx, dy);
drawP(ctx2, p)
letter.moves.push({ dir: 'R', dx: dx, dy: dy, endX: p.endX, endY: p.endY });
// letter.moves.push({ dir: 'DOT', dx: dx, dy: dy, endX: p.endX, endY: p.endY });
//-----.....---------.....---------.....----
letters.push(letter);
/* -----------------------------------
--------------------------------------*/
ctx2.stroke();
console.log('letters', ':	', letters);
function dir(d, v) {
    let pos = []
    switch (d) {
        case 'U':
            pos = [0, -v];
            break;
        case 'UR':
            pos = [0, -v];
            break;
        case 'D':
            pos = [0, v];
            break;
        case 'R':
            pos = [v, 0];
            break;
        case 'L':
            pos = [0, -v];
            break; default:
            break;
    }
}
function drawPoint(x, y, b) {
    p = set_p(x, y, b, 0);
    drawP(ctx2, p)
    p = set_p(x + b, y, 0, b);
    drawP(ctx2, p)
    p = set_p(x + b, y + b, -b, 0);
    drawP(ctx2, p)
    p = set_p(x + b, y + b, -b, 0);
    drawP(ctx2, p)
    p = set_p(x, y + b, 0, -b);
    drawP(ctx2, p)
}
function set_p(x, y, dx, dy) {
    let p = {
        startX: 0,
        startY: 0,
        endX: 0,
        endY: 0
    }
    p.startX = x;
    p.startY = y;
    p.endX = p.startX + dx;
    p.endY = p.startY + dy;
    return p;
}
function drawP(ctx2, p) {
    ctx2.moveTo(p.startX, p.startY);
    ctx2.lineTo(p.endX, p.endY);
}