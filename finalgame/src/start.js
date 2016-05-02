window.requestAnimFrame = (function(){
    return  window.requestAnimationFrame       ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame
})();


document.addEventListener("DOMContentLoaded", function(event) {

    var game = new Game(),
        lastTime = 0,
        delta;

    function mainLoop(time) {

        requestAnimFrame( mainLoop );

        delta = time - lastTime;
        // update logic
        game.update(delta);
        // render the stage+
        game.render(delta);

        lastTime = time;
    }

    requestAnimFrame( mainLoop );

});