var AssetLoader = function()
{
    var assets = [{src: "guy.png", id:"Guy"}, {src:"coin.png", id:"Coin"}],
        assetQueue = new createjs.LoadQueue(true);

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
    }

    this.getContent = function(id)
    {
        return assetQueue.getResult(id);
    }

    loadContent();
}


AssetLoader = new AssetLoader();