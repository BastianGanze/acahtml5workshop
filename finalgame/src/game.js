function Game()
{
    var renderer, mainContainer, player;
    var coins = [];

    function init()
    {
        renderer = GameRenderer();
        mainContainer = MainContainer();
        this.placeCoins(10);
        player = new Player(50,50);
    }

    this.placeCoins = function(amount) {
        for (var i = 0; i < amount; i++) {
            coins.push(new Coin(Utils.GetRandomInt(0, GAME_CONFIG.STAGE_WIDTH - 16), Utils.GetRandomInt(0, GAME_CONFIG.STAGE_HEIGHT - 16)));        
        }
    }

    this.update = function(delta)
    {
        player.update(delta);
    }

    this.render = function(delta)
    {
        renderer.render(mainContainer);
    }

    init.call(this);
}

