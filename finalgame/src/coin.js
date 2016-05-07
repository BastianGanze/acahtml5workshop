function Coin(X, Y) {

    var sprite;
    var position;
    var spriteWidth;
    var spriteHeight;
    var baseTex;
    var texture;
    var timer = 0;
    var aniTime = 100;
    var currentFrame = 0;
    var animationFrames = [];

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

        this.setupAnimation();

        MainContainer().addChild(sprite);
    }

    this.setupAnimation = function()
    {
        for(var i = 0; i < 6; i++)
        {
            animationFrames.push([new PIXI.Texture(baseTex, new PIXI.Rectangle(i*spriteWidth, 0, spriteWidth, spriteHeight))]);
        }
        this.setFrame(0,0);
    }

    this.setFrame = function(x,y)
    {
        sprite.texture = animationFrames[x][y];
    }

    this.update = function(delta) {
        timer+=delta;
        if(timer >= aniTime)
        {
            timer = 0;
            currentFrame++;
            if(currentFrame == 6)
            {
                currentFrame = 0;
            }
            this.setFrame(currentFrame, 0);
        }
    }

    this.destroy = function() {
        MainContainer().removeChild(sprite);
    }
    
    init.call(this);

}
