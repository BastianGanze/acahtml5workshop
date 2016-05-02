var mainContainer;

function MainContainer()
{
    if(!mainContainer)
    {
        mainContainer = new PIXI.Container();
    }

    return mainContainer;
}

