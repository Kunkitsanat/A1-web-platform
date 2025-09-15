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

    if(anime){
        fill(0);
    }
    else{
        fill(255);
    }
    
    if (y + 10 >= 450 - 30 && y < 450 && abs(x - mouseX) < 20) { 
        if (anime) { 
            end_game();
            noLoop();
        } 
        else {  
            start_ball();
        } 
    } 

    if (y > height) { 
        if (anime){ 
            start_ball(); 
        } 
        else {  
            end_game(); 
            noLoop(); 
        } 
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

function end_game(){
    background(255,105,97); 
    line(100,100,100,200);
    line(100,100,150,100);  
    line(100,150,150,150); 
    line(100,200,150,200);  
    
    line(200,100,200,200); 
    line(200,100,250,200); 
    line(250,100,250,200); 
    
    line(300,100,300,200); 
    line(300,100,350,150); 
    line(300,200,350,150); 
}