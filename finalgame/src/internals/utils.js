function Utils() {};

Utils.GetRandomArbitrary = function(min, max) {
    return Math.random() * (max - min) + min;
}

Utils.GetRandomInt = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
