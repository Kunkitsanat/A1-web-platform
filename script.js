let x;
let y;
let count;
let anime;

function setup() {
    createCanvas(500, 500);
    
}

function draw() {
    background(135, 206, 235);
    draw_player(mouseX);
}

function draw_player(playerx) { 
    line(playerx - 20, 450, playerx + 20, 450);
    line(playerx - 20, 450 - 30, playerx - 20, 450); 
    line(playerx + 20, 450 - 30, playerx + 20, 450); 
    
} 

