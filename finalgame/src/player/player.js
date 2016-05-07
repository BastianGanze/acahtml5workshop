function Player(startX,startY)
{
    var sprite, position,
        spriteWidth, spriteHeight, spriteFrame,
        speed = 50;
    var Direction = {
        TOP: 0,
        BOT: 1,
        LEFT: 2,
        RIGHT: 3
    };
    var walkDir = Direction.TOP; 

    function init()
    {
        position = {x:startX, y:startY};

        var img = AssetLoader.getContent("Guy");
        var bTex = new PIXI.BaseTexture(img);
        sprite = new PIXI.Sprite.fromImage('assets/sprites/guy.png');
        sprite.position.x = position.x;
        sprite.position.y = position.y;
        spriteWidth  = 32;
        spriteHeight = 48;

        this.position = position;
        this.spriteWidth = spriteWidth;
        this.spriteHeight = spriteHeight;
        spriteFrame = new PIXI.Rectangle(0,0,spriteWidth,spriteHeight);
        this.setFrame(0,0);
        MainContainer().addChild(sprite);
    }

    this.setFrame = function(x,y)
    {
        spriteFrame.x = x*spriteWidth;
        spriteFrame.y = y*spriteHeight;
        sprite.texture.frame = spriteFrame; //Set frame anew to trigger openGL update of texture.
    }

    this.update = function(delta)
    {
        position.x += Input.xAxis() * speed/delta;
        position.y += Input.yAxis() * speed/delta;
        // LEFT
        if (Input.xAxis() < 0) {
            walkDir = Direction.LEFT;
        // RIGHT
        } else if (Input.xAxis() > 0) {
              walkDir = Direction.RIGHT;
        // TOP
        } else if (Input.yAxis() < 0) {
              walkDir = Direction.TOP;
        // BOT
        } else if (Input.yAxis() > 0) {
              walkDir = Direction.BOT;
        }

        switch(walkDir) {
            case Direction.BOT:
                  this.setFrame(0, 0);
                  break;
            case Direction.TOP:
                  this.setFrame(0, 3);
                  break;
            case Direction.LEFT:
                  this.setFrame(0, 1);
                  break;
            case Direction.RIGHT:
                  this.setFrame(0, 2);
                  break;
        }

        sprite.position.x = position.x;
        sprite.position.y = position.y;
    }

    init.call(this);
}
