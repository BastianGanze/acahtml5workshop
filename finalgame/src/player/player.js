function Player(startX,startY)
{
    var sprite, position,
        spriteWidth, spriteHeight, spriteFrame,
        speed = 50, frameX = 0, frameY = 0,
        timer = 0,
        aniTime = 100,
        currentFrame = 0;
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
        var baseTex = new PIXI.BaseTexture(img);
        var texture = new PIXI.Texture(baseTex);
        sprite = new PIXI.Sprite(texture);

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
        frameX = x; frameY = y;
        spriteFrame.x = x*spriteWidth;
        spriteFrame.y = y*spriteHeight;
        sprite.texture.frame = spriteFrame; //Set frame anew to trigger openGL update of texture.
    }

    this.doAnimation = function(delta)
    {
        if(Input.xAxis() != 0 || Input.yAxis() != 0)
        {
            timer+=delta;
            if(timer >= aniTime)
            {
                timer = 0;

                    currentFrame++;
                    if(currentFrame == 3)
                    {
                        currentFrame = 0;
                    }
                    this.setFrame(currentFrame, frameY);

            }
        }
        else
        {
            this.setFrame(0, frameY);
        }
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
                  frameY = 0;
                  break;
            case Direction.TOP:
                  frameY = 3;
                  break;
            case Direction.LEFT:
                  frameY = 1;
                  break;
            case Direction.RIGHT:
                  frameY = 2;
                  break;
        }

        this.doAnimation(delta);

        sprite.position.x = position.x;
        sprite.position.y = position.y;
    }

    init.call(this);
}
