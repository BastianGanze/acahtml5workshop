function Game()
{
    var renderer, mainContainer, player;
    var coins = [];
    var score = 0;
    var scoreText;

    function init()
    {
        renderer = GameRenderer();
        mainContainer = MainContainer();
        this.placeCoins(10);
        player = new Player(50,50);

        scoreText = new PIXI.Text("0", {fill: "#000000", font: "20px Arial"});
        scoreText.position.x = 10;
        MainContainer().addChild(scoreText);
        
        var bgImage = AssetLoader.getContent("Bg");
        
    }

    this.placeCoins = function(amount) {
        for (var i = 0; i < amount; i++) {
            coins.push(new Coin(Utils.GetRandomInt(0, GAME_CONFIG.STAGE_WIDTH - 16), Utils.GetRandomInt(0, GAME_CONFIG.STAGE_HEIGHT - 16)));        
        }
    }

    this.update = function(delta)
    {
        player.update(delta);
        this.checkCollision();
        scoreText.text = score + "";
        this.replaceCoins();
    }

    this.checkCollision = function() {
        for (var i = 0; i < coins.length; i++) {
            if (Utils.Overlapping(player, coins[i])) {
                score += 10;
                coins[i].destroy();
                coins.splice(i, 1);
            }
        }
    }

    this.replaceCoins = function() {
        while (coins.length <= 10) {
            this.placeCoins(1);
        }
    } 

    this.render = function(delta)
    {
        renderer.render(mainContainer);
    }

    init.call(this);
}

