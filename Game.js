class Game{
    constructor(){

    }
    getState(){
        var getGameState= database. ref('gameState')
        getGameState.on("value",function(data){gameState=data.val()})
    
    }
    
    update(state){
        database.ref('/').update({
            gameState: state
        })
    }
    start(){
        if (gameState===0){
          form=new Form();
          form.display()
           
        }
        console.log("gameState") 
    }
    
}