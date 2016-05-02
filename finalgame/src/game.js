function Game()
{
    var renderer, mainContainer, player;

    function init()
    {
        renderer = GameRenderer();
        mainContainer = MainContainer();
        player = new Player(50,50);
    }

    this.update = function(delta)
    {
        player.update(delta);
    }

    this.render = function(delta)
    {
        renderer.render(mainContainer);
    }

    init();
}

