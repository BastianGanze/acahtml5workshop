function Utils() {}

Utils.GetRandomArbitrary = function(min, max) {
    return Math.random() * (max - min) + min;
};

Utils.GetRandomInt = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

Utils.Overlapping = function(spriteA, spriteB) {
    if (spriteA.position.x + spriteA.spriteWidth < spriteB.position.x || spriteA.position.x > spriteB.position.x + spriteB.spriteWidth ||
        spriteA.position.y + spriteA.spriteHeight < spriteB.position.y || spriteA.position.y > spriteB.position.y + spriteB.spriteHeight) {
        return false;
    } else {
        return true;
    }
};
