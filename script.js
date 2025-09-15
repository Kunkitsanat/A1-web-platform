let x;
let y;
let count;
let anime;

function setup() {
    createCanvas(500, 500);
    start_ball();
}

function draw() {
    background(135, 206, 235);
    draw_player(mouseX);
    ellipse(x,y,20,20);
    y += count;

    if (y > height) {          
        start_ball(); 
    } 


}

function draw_player(playerx) { 
    line(playerx - 20, 450, playerx + 20, 450);
    line(playerx - 20, 450 - 30, playerx - 20, 450); 
    line(playerx + 20, 450 - 30, playerx + 20, 450); 
    
} 

function start_ball() { 
    x = int(random(50, 450));  
    y = 0; 
    count = int(random(5, 12)); 
    ball_type = int(random(1, 6));
    anime = (ball_type == 1);
}
