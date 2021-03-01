class PLAYER{
    constructor(){}
    
    //extracting the value of player count from database 
    getCount(){
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value",function(data){
            playerCount1 = data.val();
        })    
    }

    //updating the value of player count in the database 
    updateCount(count){
        database.ref('/').update({
            playerCount: count
        })
    }

    //updating the player name in the database 
    update(abcd){
        var playerIndex = "player" + playerCount1;
        database.ref(playerIndex).set({
            name: abcd
        })
    }

}

