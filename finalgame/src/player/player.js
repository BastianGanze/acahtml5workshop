function Player(startX,startY)
{
    var sprite, position,
        spriteWidth, spriteHeight,
        speed = 50;

    function init()
    {
        position = {x:startX, y:startY};
        sprite = new PIXI.Sprite.fromImage('assets/sprites/guy.png');
        sprite.position.x = position.x;
        sprite.position.y = position.y;
        spriteWidth  = 32;
        spriteHeight = 48;

        sprite.texture.frame = new PIXI.Rectangle(0,0,0,0);
        this.setFrame(0,0);

        MainContainer().addChild(sprite);
    }

    this.setFrame = function(x,y)
    {
        sprite.texture.frame.x = x*spriteWidth;
        sprite.texture.frame.y = y*spriteHeight;
        sprite.texture.frame.width = spriteWidth;
        sprite.texture.frame.height = spriteHeight;
    }

    this.update = function(delta)
    {
        position.x += Input.xAxis() * speed/delta;
        position.y += Input.yAxis() * speed/delta;

        sprite.position.x = position.x;
        sprite.position.y = position.y;
    }

    init.call(this);
}