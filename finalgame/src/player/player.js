function Player(startX,startY)
{
    var sprite, position,
        spriteWidth, spriteHeight,
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

        sprite = new PIXI.Sprite.fromImage('assets/sprites/guy.png');
        sprite.position.x = position.x;
        sprite.position.y = position.y;
        spriteWidth  = 32;
        spriteHeight = 48;

        sprite.texture.frame = new PIXI.Rectangle(0,0,0,0);
        
        this.position = position;
        this.spriteWidth = spriteWidth;
        this.spriteHeight = spriteHeight;

        MainContainer().addChild(sprite);
    }

    this.setFrame = function(x,y)
    {
        sprite.texture.frame = new PIXI.Rectangle(x*spriteWidth,y*spriteHeight,spriteWidth,spriteHeight);
    }

    this.update = function(delta)
    {
        position.x += Input.xAxis() * speed/delta;
        position.y += Input.yAxis() * speed/delta;
        // LEFT
        if (Input.xAxis() < 0) {
            console.log("left");
            walkDir = Direction.LEFT;
        // RIGHT
        } else if (Input.xAxis() > 0) {
            console.log("right");
              walkDir = Direction.RIGHT;
        // TOP
        } else if (Input.yAxis() < 0) {
            console.log("top");
              walkDir = Direction.TOP;
        // BOT
        } else if (Input.yAxis() > 0) {
              console.log("bot");
              walkDir = Direction.BOT;
        }

        console.log(walkDir);

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
