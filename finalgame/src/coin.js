function Coin(X, Y) {

    var sprite;
    var position;
    var spriteWidth;
    var spriteHeight;

    function init() {
        position = { x:X, y:Y };
        sprite = new PIXI.Sprite.fromImage("assets/sprites/coin.png");
        sprite.position.x = position.x;
        sprite.position.y = position.y;
        spriteWidth = 16;
        spriteHeight = 16;

        this.position = position;
        this.spriteWidth = spriteWidth;
        this.spriteHeight = spriteHeight;

        MainContainer().addChild(sprite);
    }

    this.update = function(delta) {
        //TODO: add rotation
    }

    this.destroy = function() {
        MainContainer().removeChild(sprite);
    }
    
    init.call(this);

}
