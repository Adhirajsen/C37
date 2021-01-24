class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }
  play(){
     form.hide(); 
     textSize(30);
     text("Game Start",120,100);
     //static methods are called with the class Name
     Player.getPlayerInfo();
     if(allPlayers!==undefined){
       var display_position=130;
       for(var plr in allPlayers){
          if(plr==="player"+player.index)
                fill("red");
          else     
                fill("black");
        display_postiion+=20;
        textSize(15);
        text(allPlayers[plr].name+": "+allPlayers[plr].distance,120,display_position)

       }
     }
  }
  async start(){
    if(gameState === 0){
      player = new Player();
      //this is an object called player getCount() instance method
      player.getCount();
      form = new Form()
      form.display();
    }
  }
}
