var AssetLoader = function()
{
    var assets = [{src: "guy.png", id:"Guy"}, {src:"coin.png", id:"Coin"}],
        assetQueue = new createjs.LoadQueue(true),
        loadedCallback;

    function loadContent() {
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