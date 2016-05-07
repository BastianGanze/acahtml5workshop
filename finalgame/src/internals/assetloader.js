var AssetLoader = function()
{
    var assets = [{src: "assets/sprites/guy.png", id:"Guy"}, {src:"assets/sprites/coins.png", id:"Coins"}, {src:"assets/audio/mariocoin.wav", id:"CoinSound"}],
        assetQueue = new createjs.LoadQueue(true),
        loadedCallback;

    function loadContent() {
        createjs.Sound.alternateExtensions = ["mp3"];
        assetQueue.installPlugin(createjs.Sound);
        assetQueue.on("complete", loadComplete);
        assetQueue.on("error", loadError);
        assetQueue.loadManifest(assets);
    }

    function loadError(evt) {
        console.log("Error!",evt.text);
    }

    function loadComplete(event) {
        console.log("Finished Loading Assets");
        if(loadedCallback) loadedCallback();
    }

    this.getContent = function(id)
    {
        return assetQueue.getResult(id);
    }

    this.onContentLoaded = function(callback)
    {
        loadedCallback = callback;
        if(assetQueue.loaded) loadedCallback();
    }

    loadContent();
}


AssetLoader = new AssetLoader();