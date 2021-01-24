console.log("code goes here");
import * as PIXI from "pixi.js";


/*
//let app = new PIXI.Application({width: 256, height: 256});
//document.body.appendChild(app.view);
let app = new PIXI.Application({ 
    antialias: true,    
    transparent: false, 
    resolution: 1       
  }
  
);

app.renderer
//renderer = PIXI.autoDetectRenderer;

const renderer = new PIXI.Renderer
(
    {

    }
)

window.onload=function() 
{
    //game.load.image("player", "images/player.png");
    app = new PIXI.Application
    (
        {
            width: 800,
            height: 600,
            backgroundColor: 0x222222
        }
    );
    document.body.appendChild(app.view);
    update();
}



const loader = PIXI.Loader.shared;
loader 
    .add("images/player.png")
    .load(setup);

function setup() 
{
    let player = new PIXI.Sprite
    (
        loader.resources["images/player.png"].texture
    );

    app.stage.addChild(player);
    console.log(player);
}




function update () {
    render();
    requestAnimationFrame(update);
}




function render () {
    renderer.render(app.stage);
}



PIXI.Loader
    .add("images/player.png");
    .load(setup);

    //app.loader.baseUr1 = "images";
    //app.loader.add("player", "player.png")

    //app.loader.load();
    
    /*
    let player = PIXI.Sprite.from("images/player.png");
    
    player.anchor.set(0.5);
    player.x= app.view.width/2;
    player.y= app.view.height/2;

    app.stage.addChild(player);
    

}


//player = PIXI.Sprite.from("images/player.png");
*/
