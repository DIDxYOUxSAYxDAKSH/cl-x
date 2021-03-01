class GAME{
    constructor(){}

    getState(){
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value",function(data){
            gameState = data.val();
        })
    }

    changeState(x){
        database.ref('/').update({
            gameState: x
        })
    }

    start(){
        if(gameState===0){
           player = new PLAYER();
           player.getCount();
           
           form = new FORM();
           form.display();
        }
    }
}