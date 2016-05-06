function Coin(X, Y) {

    var sprite;
    var pos;
    var width;
    var height;

    function init() {
        pos = { x:X, y:Y };
        sprite = new PIXI.Sprite.fromImage("assets/sprites/coin.png");
        sprite.position.x = pos.x;
        sprite.position.y = pos.y;
        width = 16;
        height = 16;

        MainContainer().addChild(sprite);
    }

    this.update = function(delta) {
        //TODO: add rotation
    }
    
    init.call(this);

}
