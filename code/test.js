window.requestAnimFrame = (function(){
    return  window.requestAnimationFrame       ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame    ||
        function( callback ){
            window.setTimeout(callback, 1000 / 60);
        };
})();


document.addEventListener("DOMContentLoaded", function(event) {
    // create an new instance of a pixi stage
    var stage = new PIXI.Stage(0x66FF99);

// create a renderer instance.
    var renderer = PIXI.autoDetectRenderer(200, 200);

    function resizeRenderer() {
        var w = window.innerWidth,
            h = window.innerHeight;

        renderer.resize(w,h);
    }

    window.onresize = resizeRenderer;

    resizeRenderer();

// add the renderer view element to the DOM
    document.body.appendChild(renderer.view);

// create a texture from an image path
    var texture = PIXI.Texture.fromImage("assets/sprites/bunny.png");
// create a new Sprite using the texture
    var bunny = new PIXI.Sprite(texture);

// center the sprites anchor point
    bunny.anchor.x = 0.5;
    bunny.anchor.y = 0.5;

// move the sprite t the center of the screen
    bunny.position.x = 200;
    bunny.position.y = 150;

    stage.addChild(bunny);

    function animate() {

        requestAnimFrame( animate );

        // just for fun, lets rotate mr rabbit a little
        bunny.rotation += 0.1;

        // render the stage
        renderer.render(stage);
    }

    requestAnimFrame( animate );
});