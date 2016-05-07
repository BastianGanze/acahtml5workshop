function Coin(X, Y) {

    var sprite;
    var position;
    var spriteWidth;
    var spriteHeight;

    function init() {
        position = { x:X, y:Y };
        var img = AssetLoader.getContent("Coins");
        baseTex = new PIXI.BaseTexture(img);
        texture = new PIXI.Texture(baseTex);
        sprite = new PIXI.Sprite(texture);

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
