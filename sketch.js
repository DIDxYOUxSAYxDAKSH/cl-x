
var database; 
var gameState = 0;
var playerCount1; 

var form,player,game,canvas;

function setup(){
    canvas = createCanvas(500,500);

    database = firebase.database();

    game = new GAME();
    game.getState();
    game.start();
}

function draw(){

}


// .ref(to refer to database)
// .on(to monitor some value)
// .set/.update(to update values)
// .val(to extract the values from database)
