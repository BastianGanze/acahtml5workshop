var gameRenderer;

function GameRenderer()
{
    if(!gameRenderer)
    {
        gameRenderer = PIXI.autoDetectRenderer(GAME_CONFIG.STAGE_WIDTH, GAME_CONFIG.STAGE_HEIGHT);
        gameRenderer.backgroundColor = GAME_CONFIG.BG_COLOR;
        document.body.appendChild(gameRenderer.view);
    }

    return gameRenderer;
}

